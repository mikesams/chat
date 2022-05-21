const AppDetails = require("./models/appDetails.model");
const Chat = require("./models/chat.model");
const Member = require("./models/member.model");
const { awsService } = require("./services");

let sockets = {};
global.sockets = sockets;

module.exports = function () {
    io.on("connection", function (socket) {
        // console.log(socket)
        socket.on("user", async user => {
            console.log(user)
            socket['userId'] = user?.id;
            sockets[user?.id] = socket.id;
            io.emit('status', { id: socket.userId, status: 'Online' });
            if (user['userType'] === 'guest') {
                socket['accessToken'] = user?.accessToken;
                const qw = await AppDetails.findOne({ appId: user?.accessToken });
                const members = await Member.find({ companyId: qw?.user });
                const memeber = members.find(q => Object.keys(sockets).some(w => w === q?._id));
                const chat = await Chat.create({
                    users: [{ id: socket['userId'] },
                    { id: memeber ? memeber?._id : members[0]?._id }],
                });
                io.to([socket.id]).emit('details', {
                    from: user?.id,
                    to: memeber ? memeber?._id : members[0]?._id,
                    id: chat?._id
                })
            }
        });
        socket.on("disconnect", () => {
            console.log(socket.user)
            if (socket.userId) {
                delete sockets[socket.userId];
            }
            io.emit('status', { id: socket.userId, status: 'Offline' });
        });
        socket.on("sendMessage", async uData => {
            console.log(uData);
          const doc =  await  Chat.findById(
                uData.id
            );
            const location = uData?.type === 'file' ?  await awsService.uploadFile(uData?.file) : '';
            if (doc) {
                doc.messages.push({
                    from: socket?.userId,
                    to: uData?.to,
                    message: uData.message,
                    date: new Date(),
                    type: uData?.type,
                    location
                });

                doc.save(function (err, chat) {
                    if (err || !chat) {
                        socket.emit("serverError", { errorMsg: "hsbfewhbj" });
                    }
                    console.log(sockets[uData?.to], socket.id, sockets)
                    if (sockets[uData?.to]) {
                        io.to([sockets[uData?.to], socket.id]).emit("message", { 
                            from: socket?.userId,
                            to: uData?.to,
                            message: uData.message,
                            date: new Date()
                            , _id: uData?.id,
                            type: uData?.type,
                            location
                        }
                        );
                    }
                });
            }
        });
    });
};