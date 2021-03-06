import React, { useState } from 'react'
import './Blog.css'

const Blog = () => {

    const [data, setData] = useState(['Chat API and Uses of Chat API', 
'Reasons why to use the WhatsApp Business API for Remote Work',
'Why do you Need a Chat API For Your Business?',
'Role and Importance of Healthcare APIs']);

const [activeItem, setActiveItem]=useState('');
  return (
  <>
  {
      activeItem !== '' ? (
          <>
          	<div class="section-featured no-featured-image">
	<div class="featured-wrap flex">
			<div class="featured-content">
				<div class="tags-wrap">
					<a class="post-tag global-tag" onClick={() => setActiveItem('')}>Tutorials</a>
				</div>
				<h1 class="white" style={{margin: 0, marginBlockStart: 0, marginBlockEnd: 0}}>{activeItem}</h1>
				<div class="item-meta white">
					<span>by</span>
					<a href="/home" style={{padding: '0 12px'}}>PlugToChat</a>
					<time datetime="2022-03-04">2 months ago</time>
					<span class="reading-time"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M10.1907692,24 C4.5625628,24 0,19.4374372 0,13.8092308 C0,8.18102433 4.5625628,3.61846154 10.1907692,3.61846154 C15.8189757,3.61846154 20.3815385,8.18102433 20.3815385,13.8092308 C20.3815385,19.4374372 15.8189757,24 10.1907692,24 Z M10.1907692,22 C14.7144062,22 18.3815385,18.3328677 18.3815385,13.8092308 C18.3815385,9.28559383 14.7144062,5.61846154 10.1907692,5.61846154 C5.6671323,5.61846154 2,9.28559383 2,13.8092308 C2,18.3328677 5.6671323,22 10.1907692,22 Z" id="Oval"></path><path d="M7.53230769,2.32923077 C6.98002294,2.32923077 6.53230769,1.88151552 6.53230769,1.32923077 C6.53230769,0.776946019 6.98002294,0.329230769 7.53230769,0.329230769 L12.9225711,0.329230769 C13.4748559,0.329230769 13.9225711,0.776946019 13.9225711,1.32923077 C13.9225711,1.88151552 13.4748559,2.32923077 12.9225711,2.32923077 L7.53230769,2.32923077 Z" id="Line-2"></path><path d="M13.2928932,9.29289322 C13.6834175,8.90236893 14.3165825,8.90236893 14.7071068,9.29289322 C15.0976311,9.68341751 15.0976311,10.3165825 14.7071068,10.7071068 L10.897876,14.5163376 C10.5073517,14.9068618 9.87418674,14.9068618 9.48366245,14.5163376 C9.09313816,14.1258133 9.09313816,13.4926483 9.48366245,13.102124 L13.2928932,9.29289322 Z" id="Line"></path></svg> 3 min read</span>
				</div>
		</div>
        {
            activeItem === 'Chat API and Uses of Chat API' && (
        <div className='section-post wrap' style={{marginTop: 10}}>
            <div className='post-wrap no-image'>
                <p>
                APIs are application programming interfaces that lie on top of healthcare systems, databases, and applications. These layers enable these apps to be accessible or repurposed within the organization.
Healthcare technology is challenging to grasp. The majority of healthcare firms use a variety of apps, databases, ERPs, and software. Clinics, hospitals, clients, oversight boards, and the more excellent enterprise must all be accommodated by this technology. APIs make it easier for various systems and environments to communicate. They also offer a management and analytics layer to help with the overall management of the digital healthcare ecosystem.
                </p>
                <h2>The Advantages of Using APIs in the Healthcare Industry</h2>
                <p>APIs make interoperability and data interchange in the healthcare industry easier, which is a huge plus. We've come up with a few advantages, which are listed below:</p>
                <h2>Improved Information Connectivity on a Single Platform</h2>
                <p>APIs in the healthcare area allow you to access all health-related data from a single location. At any given time, everyone will have easy access to all information. This implies you'll have constant access to the internet. Did you know that APIs can allow you to access data from many devices for research and analysis? You may reuse this information by using some programs to make it more critical.</p>
                <h2>Exponential Growth in Health Sector</h2>
                <p>The health industry has seen significant developments due to seamless interaction between applications. Because of data sharing, all companies, such as hospitals, pharmaceutical producers, and health insurance companies, may now coordinate. More health-related advancements will result from this information-sharing technology. </p>
                <h2>Bring Coordination Between Patients & Doctors</h2>
                <p>Healthcare APIs aid in the medical application's ability to record all of a patient's details. As a result, doctors can now treat their patients with the utmost care based on their health records. The introduction of API into the health sector has created a slew of new possibilities.</p>
                <h2>Conclusion</h2>
                <p>If your health organization hasn't yet used APIs, contact PlugtoChat to improve the experience you provide to your customers and the broader ecosystem, resulting in increased income and growth. We can help businesses turn digital obstacles into competitive advantages and get more out of your API programs.</p>
            </div>
        </div>
            )
        }
          {
            activeItem === 'Reasons why to use the WhatsApp Business API for Remote Work' && (
        <div className='section-post wrap' style={{marginTop: 10}}>
            <div className='post-wrap no-image'>
                <p>
                Facebook sent off WhatsApp API Business Programming interface for endeavors to communicate with their clients flawlessly and remain associated with brands 24x7. WhatsApp for Business opened many ways to millions and billions of clients worldwide. 
                <br />
                Thinking about the outcome of texting in client relationships on the board, we will investigate the purpose of Chat APIs and their use cases in your business.
                <br />
                Small to big organizations should consider the WhatsApp Business suite interface for more effective customer service. This can be utilized stage the numerous given opportunities to clients and opens the door to deal with the client support.
                <br />
                Here are a few reasons why your business needs to profit from adding WhatsApp API software to your online engagement. 
                </p>
                <h2>Improved Functional Productivity</h2>
              <p>WhatsApp is an interface programming that assumes an essential part of every organization with accomplishing objectives by working on the specialists' proficiency. With IVR Redirection, the heap on the IVR focus diminishes. The more significant part of the inquiries that a business can tackle client questions on WhatsApp on the stage allows the specialists to go to calls that require individual consideration and convert more leads. With their fast programmed reactions, the chatbots give quick arrangements, and they are accessible 24x7, giving clients the adaptability to contact the business whenever</p>
              <h2>Better Collaboration:</h2>
              <p>With the WhatsApp APIs, a business empowers the clients to improve customer engagement. To provide an absolute position on their issues, the clients can share pictures, recordings, and different media on the stage. According to a new study, most buyers need to speak with the business through messages instead of talking on the telephone. </p>
              <h2>Increased Brand Awareness:</h2>
              <p>Brand Awareness is one element we consider behind which a business can get through the WhatsApp interface. It assists an organization with making a brand character and fortifying the business relationship with the clients. Business profiles make an expert picture and give easy availability. It offers clients the trust they need to speak with the recorded business profile. </p>
              <h2>Growing channel Connections:</h2>
              <p>WhatsApp Business furnishes one more channel to make associations with your main interest group and draw in clients. Begin by investigating and understanding how to utilize it, and afterward evaluate, assuming it's a good idea for your business. Then WhatsApp Business may be an excellent expansion to your advertising strategies.</p>
              <h2>Feature your Products and Services:</h2>
              <p>After reviewing the items, customers can likewise add things to their cart and utilize the informing instruments to affirm an exchange with your business. These APIs also function admirably for organizations with existing retail facades.</p>
              <h2>Analytics for the Customers to Understand:</h2>
              <p>The WhatsApp Business Programming interface functions can investigate the number of messages sent and received from specific users. Different analytics incorporate the number of notifications sent to the numbers of beneficiaries. </p>
              <h2>Conclusion:</h2>
              <p>WhatsApp is a great platform that consistently associates billions of users and gives companies many opportunities to come to and draw in its huge crowd. With WhatsApp for Business APIs, the organizations are presently ready to communicate with users on the platform they love and use WhatsApp chatbots rapidly and at scale.
                  <br/>
                  Plugtochat is a perfect platform that offers chat API & Javascript SDK, including the pre-built UI, allowing developers to add excellent communication between users on websites/apps in hours. 
              </p>
            </div>
        </div>
            )
        }
         {
            activeItem === 'Why do you Need a Chat API For Your Business?' && (
        <div className='section-post wrap' style={{marginTop: 10}}>
            <div className='post-wrap no-image'>
                <p>
                Building chat applications with real-time messaging, video chat, file sharing, and other essential features may be costly and require months of planning and development work and a lot of technical know-how. Fortunately, many businesses are opting to license pre-built communication software in the form of chat APIs rather than constructing their apps. This cutting-edge, cloud-based, third-party software is sweeping the app-development market.
                </p>
                <h2>What is a Chat API?</h2>
             <p>An application programming interface (API) is a piece of code that allows two programs to communicate with one another.
A chat API performs communication requests and supports live chat messaging between two or more participants via a mobile app or web browser in the world of online communication. The API connects your app to a backend communication platform that allows you to chat in real-time.</p>
<h2>Why do we need a Chat API for Business?</h2>
<p>Chat APIs open you a slew of exciting business possibilities, mainly if you employ a communications platform as a service.</p>
<h2>Chat APIs aid in customer engagement and retention.</h2>
<p>Your software may already have a significant user base and produce excellent results. Chat APIs, on the other hand, can multiply beneficial effects for your company. It has been proven that mobile apps with in-app chat features perform substantially better and positively impact the user's perception of the company.</p>
<h2>Allow you to provide real-time assistance.</h2>
<p>Chat APIs enable developers to add live-chat services into a mobile application, allowing businesses to provide consumers with real-time support. This method benefits both the firm and the user by facilitating communication.</p>
<h2>Customizable to your specific requirements and branding</h2>
<p>Every business is different; thus, chat API functionality must be customized to meet the company's logo and needs. Fortunately, many chat APIs provide a variety of customizable capabilities to match your individual mobile app needs, business goals, and design. A brand can create its theme and make itself stand out to the end-user.</p>
<h2>Conclusion</h2>
<p>PlugtoChat is the place to go if you want to build a game-changing communication platform for your users. It's simple to set up and use, yet it's also highly configurable. It is safe and reliable.
It includes innovative communication and collaboration features that can be readily linked with various mobile and online apps. The PlugtoChat SDK makes integrating these functionalities into any app or website a breeze.</p>
            </div>
        </div>
            )
        }

{
            activeItem === 'Role and Importance of Healthcare APIs' && (
        <div className='section-post wrap' style={{marginTop: 10}}>
            <div className='post-wrap no-image'>
                <p>
                APIs are application programming interfaces that lie on top of healthcare systems, databases, and applications. These layers enable these apps to be accessible or repurposed within the organization.
Healthcare technology is challenging to grasp. The majority of healthcare firms use a variety of apps, databases, ERPs, and software. Clinics, hospitals, clients, oversight boards, and the more excellent enterprise must all be accommodated by this technology. APIs make it easier for various systems and environments to communicate. They also offer a management and analytics layer to help with the overall management of the digital healthcare ecosystem.
                </p>
                <h2>The Advantages of Using APIs in the Healthcare Industry</h2>
             <p>APIs make interoperability and data interchange in the healthcare industry easier, which is a huge plus. We've come up with a few advantages, which are listed below:</p>
<h2>Improved Information Connectivity on a Single Platform</h2>
<p>APIs in the healthcare area allow you to access all health-related data from a single location. At any given time, everyone will have easy access to all information. This implies you'll have constant access to the internet. Did you know that APIs can allow you to access data from many devices for research and analysis? You may reuse this information by using some programs to make it more critical.</p>
<h2>Exponential Growth in Health Sector</h2>
<p>The health industry has seen significant developments due to seamless interaction between applications. Because of data sharing, all companies, such as hospitals, pharmaceutical producers, and health insurance companies, may now coordinate. More health-related advancements will result from this information-sharing technology. </p>
<h2>Bring Coordination Between Patients & Doctors</h2>
<p>Healthcare APIs aid in the medical application's ability to record all of a patient's details. As a result, doctors can now treat their patients with the utmost care based on their health records. The introduction of API into the health sector has created a slew of new possibilities.</p>
<h2>Conclusion</h2>
<p>If your health organization hasn't yet used APIs, contact PlugtoChat to improve the experience you provide to your customers and the broader ecosystem, resulting in increased income and growth. We can help businesses turn digital obstacles into competitive advantages and get more out of your API programs.</p>
 </div>
        </div>
            )
        }
	</div>
</div>
          </>
      ): (
          <>
  <div class="profile-wrap " style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
  }}>
		<h1>Blog</h1>
		<div class="posts-number">
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.4429008,23.7744902 L8.34787826,17.944169 L2.25285576,23.7744902 C2.10780746,23.8894094 1.94171423,23.9595562 1.77120393,23.9868714 C1.71719951,23.9954904 1.66181846,24 1.6053913,24 C0.733763643,24 4.4408921e-16,23.3090623 4.4408921e-16,22.42036 L4.4408921e-16,1.25412932 C4.4408921e-16,0.723799848 0.28433197,0.244699969 0.822236618,0.0663515255 C0.982404415,0.0132460589 1.12666656,-0.00204032517 1.28186513,0.000211809426 C1.35304676,0.0012447482 1.38046168,0.0031905923 1.50305219,0.0133965248 C1.55929016,0.0180784608 1.58577038,0.0196251488 1.6053913,0.0196251488 L15.0902609,0.0196251488 C15.1098818,0.0196251488 15.136362,0.0180784608 15.1926,0.0133965248 C15.3151905,0.0031905923 15.3426054,0.0012447482 15.413787,0.000211809426 C15.5689856,-0.00204032517 15.7132478,0.0132460589 15.8734156,0.0663515255 C16.4113202,0.244699969 16.6956522,0.723799848 16.6956522,1.25412932 L16.6956522,22.42036 C16.6956522,23.3090623 15.9618885,24 15.0902609,24 C15.0061199,24 14.9243049,23.9899728 14.8459304,23.9710405 C14.7032293,23.9368156 14.5655424,23.871657 14.4429008,23.7744902 Z"/></svg>			<span>
				4 posts
			</span>
		</div>
		{/* <h2>Learn about new product announcements and all the different ways you can use PlugToChat features in your digital products.</h2> */}
	</div>
    <div id="loop" class="section-loop wrap">
	<div class="items-wrap flex">
            {
                data.map(q => (
                        <div key={q} onClick={() => setActiveItem(q)} class="item-wrap flex post tag-product tag-product-update tag-hash-blue tag-hash-post-blue no-image ">
                    <article >
		<a class="item-link-overlay"></a>
		<h2><a class="white">{q}</a></h2>
		<div class="item-meta white is-primary-tag ">
			<span>by</span>
			<a  style={{padding: '0 12px'}}>PlugToChat</a>
			<time datetime="2022-05-02">4 days ago</time>
		</div>
		<a class="primary-tag global-tag white" >Product</a>
			</article>
</div>		
                ))
            }	</div>
</div>
          </>
      )
  }
   </>
  )
}

export default Blog