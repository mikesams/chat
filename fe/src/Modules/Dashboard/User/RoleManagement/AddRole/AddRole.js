import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AdminService from "../../../../../Services/admin.service";
import UserService from "../../../../../Services/user.service";
import "./AddRole.css";

const generalActions = [
  {
    text: "This option shows or hides the typing indicators which appear when other users are typing in the chat. This can be used to only allow certain groups of users to see when other users are typing.",
    value: "Show typing indicators",
  },
  {
    text: "By default this will let your users send images, videos, archives, and PDF files (max 100 MB per file).",
    value: "Allow file sharing",
  },
  // {
  //   text: "Note: Due to browser limitations, this will only work if your site runs on HTTPS (secure connection).",
  //   value: "Allow location sharing",
  // },
];

const deleteActions = ["None", "Their own messages", "All messages"];

const suppressActions = [
  {
    value: "",
    label: "Do not suppress contact info",
  },
  {
    value: "Suppress contact info in all messages",
    label: "Suppress contact info in all messages",
  },
  {
    value: "Only suppress contact info in messages written by others",
    label: "Only suppress contact info in messages written by others",
  },
];

const AddRole = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();

  const watchIsEmailNotificationsEnabled = watch(
    "isEmailNotificationsEnabled",
    true
  );

  const [roles, setRoles] = useState([]);
  const [id, setId] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (location?.state?.id) {
      getRoleById(location?.state?.id);
    }
    console.log(location.state);
  }, [location]);

  const getRoles = async () => {
    try {
      const res = await UserService.getRoles();
      console.log(res?.data);
      setRoles(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRoleById = async (id) => {
    try {
      const res = await UserService.getRoleById(id);
      setId(id);
      setValue("name", res?.data?.name);
      setValue("timeout", res?.data?.timeout);
      setValue("generalActions", res?.data?.generalActions);
      setValue("theme", res?.data?.theme);
      setValue(
        "isEmailNotificationsEnabled",
        res?.data?.isEmailNotificationsEnabled
      );
      setValue("subject", res?.data?.subject);
      setValue("senderName", res?.data?.senderName);
      setValue("htmlTemplate", res?.data?.htmlTemplate);
      setValue("textTemplate", res?.data?.textTemplate);
      setValue("deleteAction", res?.data?.deleteAction);
      setValue("suppressContact", res?.data?.suppressContact);
    } catch (error) {
      console.log(error);
    }
  };

  const save = async (data) => {
    try {
      (await id)
        ? UserService.editRole({ ...data, id })
        : UserService.createRole(data);
      reset();
      props.showSuccess({ message: 'Successfully Updated', detail: 'Add Role Screen' });
      navigate("/app/roles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-0">
      <div className="header-body">
        <div>
          <h6 className="header-pretitle">Overview</h6>
          <h1 className="header-title text-truncate">Add Role</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(save)} style={{ marginTop: "30px" }}>
        <div className="form-group">
          <label className="form-label">Name of the Role</label>
          <input
            type="text"
            {...register("name", {
              required: "Required Input",
            })}
            className="form-control"
            placeholder="Name of the Plan"
          />
          {errors?.name && (
            <small className="text-danger mt-3 ms-3">
              {errors?.name?.message}
            </small>
          )}
        </div>

        <div
          className="mt-6"
          style={{
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
            boxShadow: "0 0.75rem 1.5rem rgb(18 38 63 / 3%)",
            border: "1px solid #edf2f9",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              padding: "12px 24px",
              borderBottom: "1px solid rgb(237, 242, 249)",
            }}
          >
            <p
              className="m-0"
              style={{ fontSize: "15px", fontWeight: 500, color: "#000" }}
            >
              General
            </p>
          </div>
          <div style={{ padding: "1.5rem" }}>
            {generalActions.length > 0 &&
              generalActions.map((action) => (
                <div key={action.value} className="mb-4">
                  <div className="form-check">
                    <input
                      {...register("generalActions")}
                      className="form-check-input"
                      value={action}
                      type="checkbox"
                      id="checklistOne"
                    />
                    <label className="form-check-label">{action.value}</label>
                  </div>
                  <div className="mt-4">
                    <small style={{ color: "#666" }}>{action.text}</small>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="form-group mt-5">
          <label className="form-label">Timeout (in seconds)</label>
          <input
            type="number"
            {...register("timeout", {
              required: "Required Input",
              value: 15,
            })}
            className="form-control"
            placeholder="Timeout (in seconds)"
          />
          <small className="text-muted">
            Sends notifications after specified timeout of inactivity. Maximum
            allowed timeout is 900 seconds (15 minutes). The changes may take up
            to an hour to propagate.
          </small>{" "}
          <br />
          {errors?.timeout && (
            <small className="text-danger mt-3 ms-3">
              {errors?.timeout?.message}
            </small>
          )}
        </div>

        <div
          className="mt-6"
          style={{
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
            boxShadow: "0 0.75rem 1.5rem rgb(18 38 63 / 3%)",
            border: "1px solid #edf2f9",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              padding: "12px 24px",
              borderBottom: "1px solid rgb(237, 242, 249)",
            }}
          >
            <p
              className="m-0"
              style={{ fontSize: "15px", fontWeight: 500, color: "#000" }}
            >
              {" "}
              Email settings
            </p>
          </div>
          <div style={{ padding: "1.5rem" }}>
            <div className="form-check">
              <input
                {...register("isEmailNotificationsEnabled")}
                className="form-check-input"
                value="yes"
                type="checkbox"
                id="checklistOne"
              />
              <label className="form-check-label">
                Enable Email notifications
              </label>
            </div>
          </div>
        </div>
        {watchIsEmailNotificationsEnabled && (
          <div className="mt-5">
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                {...register("subject", {
                  ...(watchIsEmailNotificationsEnabled && {
                    required: "Required Input",
                    value: '{{sender.name}} wants to chat with you on {{app.name}}'
                  }),
                })}
                className="form-control"
                placeholder="Subject"
              />
              {errors?.subject && (
                <small className="text-danger mt-3 ms-3">
                  {errors?.subject?.message}
                </small>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Sender name</label>
              <input
                type="text"
                {...register("senderName", {
                  ...(watchIsEmailNotificationsEnabled && {
                    required: "Required Input",
                    value: '{{sender.name}} (via {{app.name}})'
                  }),
                })}
                className="form-control"
                placeholder="Sender name"
              />
              {errors?.senderName && (
                <small className="text-danger mt-3 ms-3">
                  {errors?.senderName?.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Html template</label>
              <textarea
                style={{ minHeight: "160px" }}
                {...register("htmlTemplate", {
                  ...(watchIsEmailNotificationsEnabled && {
                    required: "Required Input",
                    value: `<div>
Hi {{recipient.name}}, <br/>
<br/>
{{sender.name}} wants to chat with you on {{app.name}}:<br/>
<br/>
{{megssages.all}}
<br/>
<a href="https://example.com/inbox">Click here to join the chat.</a>
<br/>
<br/>
On behalf of {{sender.name}},<br/>
The {{app.name}} team.<br/>
<br/>
</div>
              `,
                  }),
                })}
                className="form-control"
              ></textarea>
              {errors?.htmlTemplate && (
                <small className="text-danger mt-3 ms-3">
                  {errors?.htmlTemplate?.message}
                </small>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Text template</label>
              <textarea
                style={{ minHeight: "160px" }}
                {...register("textTemplate", {
                  ...(watchIsEmailNotificationsEnabled && {
                    required: "Required Input",
                    value: `Hi {{recipient.name}},

{{sender.name}} wants to chat with you on {{app.name}}:

{{messages.all}}

https://example.com/inbox Click here to join the chat.

On behalf of {{sender.name}},
The {{app.name}} team.
                `,
                  }),
                })}
                className="form-control"
              ></textarea>
              {errors?.textTemplate && (
                <small className="text-danger mt-3 ms-3">
                  {errors?.textTemplate?.message}
                </small>
              )}
            </div>
          </div>
        )}

        <div
          className="mt-6"
          style={{
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
            boxShadow: "0 0.75rem 1.5rem rgb(18 38 63 / 3%)",
            border: "1px solid #edf2f9",
            backgroundColor: "#fff",
          }}
        >
          {/* <div
            style={{
              padding: "12px 24px",
              borderBottom: "1px solid rgb(237, 242, 249)",
            }}
          >
            <p
              className="m-0"
              style={{ fontSize: "15px", fontWeight: 500, color: "#000" }}
            >
              UI Theme
            </p>
          </div> */}
          {/* <div style={{ padding: '1.5rem' }}>
            {
              generalActions.length > 0 && generalActions.map(action => (
                <div className="form-check mb-4" key={action}>
                  <input {...register("generalActions")} className="form-check-input" value={action} type="checkbox" id="checklistOne" />
                  <label className="form-check-label">{action}</label>
                </div>
              ))
            }
          </div> */}
        </div>

        <div className="form-group mt-6">
          <label className="form-label">
            Message action permissions (<b>DELETE</b>)
          </label>
          <select
            className="form-control"
            {...register("deleteAction", { value: "None" })}
          >
            {deleteActions.length > 0 &&
              deleteActions.map((action) => (
                <option key={action} value={action}>
                  {action}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group mt-6">
          <label className="form-label">Suppress contact info</label>
          <select
            className="form-control"
            {...register("suppressContact", { value: "" })}
          >
            {suppressActions.length > 0 &&
              suppressActions.map((action) => (
                <option key={action.value} value={action.value}>
                  {action.label}
                </option>
              ))}
          </select>
        </div>

        <button className="btn btn-primary mt-5 mb-5" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddRole;
