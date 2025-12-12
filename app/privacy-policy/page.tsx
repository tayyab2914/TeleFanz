import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Telefanz",
  description: "Telefanz Privacy Policy - Learn how we collect, use, share, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050008] text-white">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Telefanz Privacy Policy</h1>
          <p className="text-white/60 mb-12">Last updated: Jul 17, 2025</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 leading-relaxed mb-4">
              Welcome to Telefanz. This Privacy Policy applies to Telefanz services (the "Platform"), which include
              Telefanz apps, websites, software and related services accessed via any platform or device that link to
              this Privacy Policy. The Platform is provided and controlled by Telefanz Portal, with its registered
              address at Dubai, United Arab Emirates ("Telefanz", "we" or "us").
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect,
              use, share, and otherwise process the personal information of users, and other individuals in connection
              with our Platform. If you do not agree with this policy, you should not use the Platform.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">What information we collect</h2>
            <p className="text-white/80 leading-relaxed mb-4">We may collect the following information about you:</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Information You Provide</h3>

            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your profile information.</strong> You give us information when you register on the Platform,
              including your username, password, date of birth (where applicable), email address and/or telephone
              number, information you disclose in your user profile, and your photograph or profile video.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>User content.</strong> We process the content you generate on the Platform, including photographs,
              audios and videos you upload or create, comments, hashtags, feedback, reviews, and livestreams you make,
              and the associated metadata, such as when, where, and by whom the content was created ("User Content").
              Even if you are not a user, information about you may appear in User Content created or published by users
              on the Platform. We collect User Content through pre-loading at the time of creation, import, or upload,
              regardless of whether you choose to save or upload that User Content, in order to recommend audio options
              and provide other personalized recommendations. If you apply an effect to your User Content, we may
              collect a version of your User Content that does not include the effect.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Messages.</strong> We collect information you provide when you compose, send, or receive messages
              through the Platform's messaging functionalities. They include messages you send or receive through our
              chat functionality when communicating with merchants who sell goods to you, and your use of virtual
              assistants when purchasing items through the Platform. That information includes the content of the
              message and information about the message, such as when it was sent, received, or read, and message
              participants. Please be aware that messages you choose to send to other users of the Platform will be
              accessible by those users and that we are not responsible for the manner in which those users use or share
              the messages.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We may access content, including text, images, and video, found in your device's clipboard, with your
              permission. For example, if you choose to initiate content sharing with a third-party platform, or choose
              to paste content from the clipboard into the Platform, we access this information stored in your clipboard
              in order to fulfil your request.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purchase information.</strong> When you make a purchase or payment on or through the Platform,
              including when you buy Telefanz Coins or purchase goods through our shopping features, we collect
              information about the purchase or payment transaction, such as payment card information, billing,
              delivery, and contact information, and items you purchased.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your phone and social network contacts.</strong> If you choose to sync your phone contacts, we
              will access and collect information such as names, phone numbers, and email addresses, and match that
              information against existing users of the Platform. If you choose to share your social network contacts,
              we will collect your public profile information as well as names and profiles of your social network
              contacts.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Proof of your identity or age.</strong> We sometimes ask you to provide proof of identity or age
              in order to use certain features, such as livestream or verified accounts, or when you apply for a
              Business Account, ensure that you are old enough to use the Platform, or in other instances where
              verification may be required.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Information in correspondence you send to us,</strong> including when you contact us for support
              or feedback.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>
                Information through surveys, research, promotion, contests, marketing campaigns, challenges,
                competitions or events
              </strong>{" "}
              conducted or sponsored by us, in which you participate.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Automatically Collected Information</h3>

            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Usage Information.</strong> We collect information regarding your use of the Platform, e.g., how
              you engage with the Platform, including how you interact with content we show to you, the advertisements
              you view, videos you watch and problems encountered, browsing and search history, the content you like,
              the content you save to 'My Favourites', the users you follow and how you engage with mutual followers.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Inferred Information.</strong> We also infer your attributes, including your interests, gender and
              age range for the purpose of personalising content.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Technical Information we collect about you.</strong> We collect certain information about the
              device you use to access the Platform, such as your IP address, user agent, mobile carrier, time zone
              settings, identifiers for advertising purposes, model of your device, the device system, network type,
              device IDs, your screen resolution and operating system, app and file names and types, keystroke patterns
              or rhythms, battery state, audio settings and connected audio devices. Where you log-in from multiple
              devices, we will be able to use your profile information to identify your activity across devices. We may
              also associate you with information collected from devices other than those you use to log-in to the
              Platform.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Location Information.</strong> We collect information about your approximate location, including
              location information based on your SIM card and/or IP address. With your permission, we may also collect
              precise location data (such as GPS). In addition, we collect location information (such as tourist
              attractions, shops, or other points of interest) if you choose to add location information to your User
              Content.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Image and Audio Information.</strong> We may collect information about the videos, images and
              audio that are a part of your User Content, such as identifying the objects and scenery that appear, the
              existence and location within an image of face and body features and attributes, the nature of the audio,
              and the text of the words spoken in your User Content. We may collect this information to enable special
              video effects, for content moderation, for demographic classification, for content and ad recommendations,
              and for other non-personally-identifying operations.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Cookies.</strong> We and our service providers and business partners use cookies and other similar
              technologies (e.g., web beacons, flash cookies, etc.) ("Cookies") to automatically collect information,
              measure and analyse how you use the Platform, including which pages you view most often and how you
              interact with content, enhance your experience using the Platform, improve the Platform, provide you with
              advertising, and measure the effectiveness of advertisements and other content. We and our partners also
              use Cookies to promote the Platform on other platforms and websites. Cookies enable the Platform to
              provide certain features and functionality. Web beacons are very small images or small pieces of data
              embedded in images, also known as "pixel tags" or "clear GIFs," that can recognize Cookies, the time and
              date a page is viewed, a description of the page where the pixel tag is placed, and similar information
              from your computer or device.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Information From Other Sources</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We may receive the information described in this Privacy Policy from other sources, such as:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>
                If you choose to register or use the Platform using a third-party social network account details (e.g.,
                Facebook, Instagram, Google, Apple) or login service, you will provide us or allow to provide us with
                your username, public profile, and other possible information related to such account. We will likewise
                share certain information with your social network such as your app ID, access token and the referring
                URL. If you link your Telefanz account to another service, we may receive information about your use of
                that service.
              </li>
              <li>
                Advertisers, measurement and other partners share information with us about you and the actions you have
                taken outside of the Platform, such as your activities on other websites and apps or in stores,
                including the products or services you purchased, online or in person. These partners also share
                information with us, such as mobile identifiers for advertising, hashed email addresses and phone
                numbers, and cookie identifiers, which we use to help match you and your actions outside of the Platform
                with your Telefanz account. Some of our advertisers and other partners enable us to collect similar
                information directly from their websites or apps.
              </li>
              <li>
                We may obtain information about you from certain affiliated entities within our corporate group,
                including about your activities on their platforms.
              </li>
              <li>
                We may receive information about you from others, including where you are included or mentioned in User
                Content, direct messages, in a complaint, appeal, request or feedback submitted to us, or if your
                contact information is provided to us. We may collect information about you from other publicly
                available sources.
              </li>
              <li>
                We may receive information from merchants and payment and transaction fulfilment providers about you,
                such as payment confirmation details, and information about the delivery of products you have purchased
                through our shopping features.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">How we use your information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              As explained below, we use your information to improve, support and administer the Platform, to allow you
              to use its functionalities, and to fulfil and enforce our Terms of Service. We may also use your
              information to, among other things, personalise content you see on the Platform, promote the Platform, and
              customize your ad experience. We generally use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>
                To fulfill requests for products, services, Platform functionality, support and information for internal
                operations, including troubleshooting, data analysis, testing, research, statistical, and survey
                purposes and to solicit your feedback.
              </li>
              <li>
                To provide our shopping features and facilitate the purchase and delivery of products, goods and
                services, including sharing your information with merchants, payment and transaction fulfilment
                providers, and other service providers in order to process your orders.
              </li>
              <li>
                To personalise the content that you see when you use the Platform. For example, we may provide you with
                services based on the country settings you have chosen or show you content that is similar to content
                that you have liked or interacted with.
              </li>
              <li>
                To send promotional materials, including by instant messaging or email, from us or on behalf of our
                affiliates and trusted third parties.
              </li>
              <li>To improve and develop our Platform and conduct product development.</li>
              <li>
                To measure and understand the effectiveness of the advertisements and other content we serve to you and
                others, and to deliver advertising, including targeted advertising, to you on the Platform.
              </li>
              <li>
                To support the social functions of the Platform, including to permit you and others to connect with each
                other (for example, through our Find Friends function) and to share whether you are active on the
                Platform (and other information which you choose to share) with your friends, to provide our messaging
                service if you choose to use this function, to suggest accounts to you and others, and for you and
                others to share, download, and otherwise interact with User Content posted through the Platform.
              </li>
              <li>To enable you to participate in the virtual items program.</li>
              <li>
                To allow you to participate in interactive features of the Platform, such as enabling your content to be
                used in other users' videos.
              </li>
              <li>
                To use User Content as part of our advertising and marketing campaigns to promote the Platform, to
                invite you to participate in an event, and to promote popular topics, hashtags and campaigns on the
                Platform.
              </li>
              <li>To understand how you use the Platform, including across your devices.</li>
              <li>To infer additional information about you, such as your age range, gender, and interests.</li>
              <li>
                To help us detect and combat abuse, harmful activity, fraud, spam, and illegal activity on the Platform.
              </li>
              <li>To ensure content is presented in the most effective manner for you and your device.</li>
              <li>
                To promote the safety, security of the Platform, including by scanning, analysing, and reviewing User
                Content, messages and associated metadata for violations of our Terms of Service, Community Guidelines,
                or other conditions and policies.
              </li>
              <li>To facilitate research conducted by independent researchers that meets certain criteria.</li>
              <li>To verify your identity or age.</li>
              <li>To communicate with you, including to notify you about changes in our services.</li>
              <li>
                To announce you as a winner of our contests or promotions if permitted by the promotion rule, and to
                send you any applicable prizes.
              </li>
              <li>To enforce our Terms of Service, Community Guidelines, and other conditions and policies.</li>
              <li>
                Consistent with your permissions, to provide you with location-based services, such as advertising and
                other personalized content.
              </li>
              <li>To train and improve our technology, such as our machine learning models and algorithms.</li>
              <li>
                To facilitate and fulfill sales, promotion, and purchases of goods and services and to provide user
                support.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">How we share your information</h2>
            <p className="text-white/80 leading-relaxed mb-4">We share your information with the following parties:</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Business Partners</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you choose to register to use the Platform using your social network account details (e.g., Facebook,
              Instagram, Google, Apple), you will provide us or allow your social network to provide us with your phone
              number, email address, username and public profile. We will likewise share certain information with the
              relevant social network such as your app ID, access token and the referring URL. If you choose to allow a
              third-party service to access your account, we will share certain information about you with the third
              party. Depending on the permissions you grant, the third party may be able to obtain your account
              information and other information you choose to provide.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Where you opt to share content on social media platforms, the video, username and accompanying text will
              be shared on that platform or, in the case of sharing via instant messaging platforms such as WhatsApp, a
              link to the content will be shared.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Service Providers</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We provide information and content to service providers who support our business, such as cloud service
              providers and providers of content moderation services to ensure that the Platform is a safe and enjoyable
              place and service providers that assist us in marketing the Platform.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Payment processors and transaction fulfilment providers:</strong> If you choose to buy Coins or
              conduct other payment related transactions, we will share data with the relevant payment provider to
              facilitate this transaction. For Coin transactions, we share a transaction ID to enable us to identify you
              and credit your account with the correct value in coins once you have made the payment.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Analytics providers:</strong> We use analytics providers to help us in the optimization and
              improvement of the Platform. Our third-party analytics providers also help us serve targeted
              advertisements.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Advertisers, Advertising Networks and Measurement Partners
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We share information with advertisers and third-party measurement companies to show how many and which
              users of the Platform have viewed or clicked on an advertisement.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              If you use the Telefanz, we share information with advertising networks to display personalized
              advertisements to you on the Telefanz app and elsewhere online. We are not responsible for the privacy
              practices of these third parties, and the information practices of these third parties are not covered by
              this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Independent Researchers</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We share your information with independent researchers to facilitate research that meets certain criteria.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Our Corporate Group</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We may also share your information with other members, subsidiaries, or affiliates of our corporate group,
              including to provide the Platform, to improve and optimize the Platform, to prevent illegal use and to
              support users.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">For Legal Reasons</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We will share your information with law enforcement agencies, public authorities or other organizations if
              legally required to do so, or if such use is reasonably necessary to:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>comply with legal obligation, process or request;</li>
              <li>
                enforce our Terms of Service and other agreements, policies, and standards, including investigation of
                any potential violation thereof;
              </li>
              <li>detect, prevent or otherwise address security, fraud or technical issues; or</li>
              <li>
                protect the rights, property or safety of us, our users, a third party or the public as required or
                permitted by law (including exchanging information with other companies and organizations for the
                purposes of fraud protection and credit risk reduction).
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Public Profiles</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Please note that if your profile is public, your content will be visible to anyone on the Platform and may
              also be accessed or shared by your friends and followers as well as third parties such as search engines,
              content aggregators and news sites.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Sale, Merger or Other Business Transactions</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We may also disclose your information to third parties:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>
                in the event that we sell or buy any business or assets (whether a result of liquidation, bankruptcy or
                otherwise), in which case we will disclose your data to the prospective seller or buyer of such business
                or assets; or
              </li>
              <li>
                if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or
                all of our assets. In such transactions, user information may be among the transferred assets.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Merchants, Payment and Transaction Fulfilment Providers, and Other Service Providers
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              When you make a purchase through our shopping features, we share the information related to the
              transaction with the merchant, payment and transaction fulfilment providers, and other service providers.
              For example, we will share the order items, contact details and delivery information so your order can be
              processed. These entities may use the information shared in accordance with their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">Where we store your information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Your information may be stored on servers located outside the country where you live, such as in
              Singapore, Malaysia, Ireland and the United States. We maintain major servers around the world to bring
              you our services globally and continuously.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">Your rights and choices</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You have rights and choices when it comes to your information. You may be afforded certain rights under
              applicable laws, which may include the right to access, delete, update, or rectify your data, to be
              informed of the processing of your data, to file complaints with authorities, and potentially other
              rights. You may submit a request to exercise your rights under applicable laws at support@telefanz.com.
              You may appeal any decision we have made about your request by following the instructions in the
              communication you receive from us notifying you of our decision.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              You can access and edit most of your profile information by signing into Telefanz. You can delete the User
              Content you uploaded. We also provide a number of tools in Settings that allow you to control, among
              others, who can view your videos, send you messages, or post comments to your videos. Should you choose to
              do so, you may delete your entire account in Settings.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              You may be able to refuse or disable Cookies by adjusting your device browser settings. Because each
              browser is different, please consult the instructions provided by your browser. Please note that you may
              need to take additional steps to refuse or disable certain types of Cookies. For example, due to
              differences in how browsers and mobile apps function, you may need to take different steps to opt out of
              Cookies used for targeted advertising in a browser and to opt out of targeted advertising for a mobile
              application, which you may control through your device settings or mobile app permissions. In addition,
              your opt-out selection is specific to the particular browser or device that you are using when you opt
              out, so you may need to opt-out separately for each of browser or device. If you choose to refuse,
              disable, or delete Cookies, some of the functionality of the Platform may no longer be available to you.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">The security of your information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We take steps to ensure that your information is treated securely and in accordance with this policy.
              Unfortunately, the transmission of information via the internet is not completely secure. Although we will
              use reasonable measures to protect your personal data, for example, by encryption, we cannot guarantee the
              security of your information transmitted via the Platform; any transmission is at your own risk.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We have appropriate technical and organizational measures to ensure a level of security appropriate to the
              risk of varying likelihood and severity for the rights and freedoms of you and other users. We maintain
              these technical and organizational measures and will amend them from time to time to improve the overall
              security of our systems.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We will, from time to time, include links to and from the websites of our partner networks, advertisers
              and affiliates. If you follow a link to any of these websites, please note that these websites have their
              own privacy policies and that we do not accept any responsibility or liability for these policies. Please
              check these policies before you submit any information to these websites.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">How long we keep your information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We retain information for as long as necessary to provide the Platform and for the other purposes set out
              in this Privacy Policy. We also retain information when necessary to comply with contractual and legal
              obligations, when we have a legitimate business interest to do so (such as improving and developing the
              Platform, and enhancing its safety, security and stability), and for the exercise or defense of legal
              claims.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              The retention periods are different depending on different criteria, such as the type of information and
              the purposes for which we use the information. For example, when we process your information such as your
              profile information to provide you with the Platform, we keep this information for as long as you have an
              account. If you violate our Terms of Service, Community Guidelines, or other conditions or policies, we
              may remove your profile and User Content from public view immediately, but may keep other information
              about you to process the violation.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">
              Information relating to children and teens
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Telefanz is not directed at children under the age of 13. In certain cases, this age may be higher due to
              local regulatory requirements, please see your local supplemental terms for more information. If you
              believe that there is a user who is below this minimum age, please contact us at support@telefanz.com.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">Privacy Policy update</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we update the Privacy Policy, we will notify you
              by updating the "Last Updated" date at the top of this policy and posting the new Privacy Policy or
              providing any other notice required by applicable law. Your continued access to or use of the Platform
              after the date of the updated policy constitutes your acceptance of the updated policy. If you do not
              agree to the updated policy, you must stop accessing or using the Platform.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">Contact</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have questions, comments, complaints or requests regarding this Privacy Policy, please contact us
              at support@telefanz.com.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We will endeavor to deal with your request as soon as possible. This is without prejudice to your right to
              make a complaint with a relevant data protection authority, where applicable.
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-6">
              Supplemental Terms – Jurisdiction-Specific
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              In the event of a conflict between the provisions of the Supplemental Terms – Jurisdiction-Specific that
              are relevant to your jurisdiction from which you access or use the services, and the rest of policy, the
              relevant jurisdictions' Supplemental Terms – Jurisdiction-Specific will supersede and control.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Argentina</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Argentina, the following additional terms apply. In the event of any
              conflict between the following additional terms and the provisions of the main body of this Policy, the
              following terms shall prevail.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your rights and options:</strong> According to Law No. 25,326, Regulatory Decree No. 1558/2001 and
              the provisions and/or binding resolutions issued by the Agency for Access to Public Information ("AAIP"),
              you have the following rights with respect to your personal data: access, rectification and deletion
              regarding data protection. You can exercise your rights by sending your request to support@telefanz.com
              free of charge.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We encourage you to contact us if you are not satisfied with how we have responded to any of your rights
              requests. You also have the right to lodge a complaint with the AAIP. You can contact AAIP through the
              site: https://www.argentina.gob.ar/aaip/datospersonales/derechos.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Brazil</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using the Platform in Brazil, the following additional terms apply. If any conflict arises
              between the main Privacy Policy and the additional terms, the following terms shall prevail:
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Exercise of data protection rights.</strong> Brazilian law provides certain rights to individuals
              with regard to their personal data. Thus, we seek to ensure transparency and access controls in order to
              allow users to benefit from the mentioned rights.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We will respond and/or fulfil your requests for the exercise of your rights below, according to the
              applicable law and when applicable, to the Brazilian General Data Protection Law – LGPD:
            </p>
            <ul className="list-roman pl-6 text-white/80 space-y-2 mb-4">
              <li>I. confirmation of whether your data are being processed;</li>
              <li>II. access to your data;</li>
              <li>III. correction of incomplete, inaccurate or outdated data;</li>
              <li>IV. anonymization, blocking or erasure of data;</li>
              <li>V. portability of personal data to a third party;</li>
              <li>VI. object to the processing of personal data;</li>
              <li>VII. information of public and private entities with which we shared data;</li>
              <li>
                VIII. information about the possibility to refuse providing personal data and the respective
                consequences, when applicable;
              </li>
              <li>IX. withdrawal of your consent.</li>
              <li>
                X. request a review of decisions made solely based on automated processing of personal data affecting
                your interests, including decisions made to define your personal, professional, consumer or credit
                profile, or aspects of your personality.
              </li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              We encourage you to contact us if you are not satisfied with how we have responded to any of your rights
              requests. You also have the right to lodge a complaint with the Brazilian Data Protection Authority
              (ANPD).
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Verifying your identity:</strong> For your safety and to allow us to make sure that we do not
              disclose any of your personal data to unauthorized third parties, in order to verify your identity and
              guarantee the adequate exercise of your rights, we may request specific information and/or documents from
              you before we can properly respond to a request received concerning your data. All data and documents
              received from you in the process of responding to your requests will be used for the strict purposes of
              analysing your request, authenticating your identity, and finally responding to your request.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Limitations to your rights:</strong> In certain situations, we may have legitimate reasons not to
              comply with some of your requests. For instance, we may choose not to disclose certain information to you
              when a disclosure could adversely impact our business whenever there is a risk of violation to our trade
              secrets or intellectual property rights. In addition, we may refrain from complying with a request for
              erasure when the maintenance of your data is required for complying with legal or regulatory obligations
              or when such maintenance is required to protect our rights and interests in case a dispute arises.
              Whenever this is the case and we are unable to comply with a request you make, we will let you know the
              reasons why we cannot fulfil your request.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Contact:</strong> In case of doubt about your privacy, your rights or how to exercise them, please
              contact us through the form "Contact". If you have any questions about the processing of your personal
              data, we would like to clarify them.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Access Logs.</strong> We keep your application access logs, under confidentiality, in a controlled
              and safe environment for at least 6 months, in order to comply with legal obligations.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Language.</strong> The Policy have been prepared in the English language.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>International Transfers.</strong> International data transfers are necessary for us to provide our
              services. If you are located in Brazil, we will always rely on one of the international data transfer
              mechanisms under applicable data protection laws and regulations.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Canada</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using the Platform in Canada, the following additional terms apply.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Information Relating to Children and Teens.</strong> Please note that if you are a resident of the
              Province of Quebec, you are only permitted to use the Platform if you are at least 14 years old.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your Rights.</strong> Subject to limited exceptions under applicable law, you have the right to
              access, update, rectify and correct inaccuracies in your personal information and to withdraw your consent
              to our collection, use and disclosure of your personal information. To exercise these rights, you may
              contact us using the contact information set out below. We may require certain personal information for
              the purpose of verifying the identity of the individual making the request or that they are authorized to
              act on behalf of another individual in such matters.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your Choices.</strong> You can unsubscribe from our marketing emails at any time by clicking the
              "unsubscribe" link included at the bottom of each email we send. For more information about managing your
              account and privacy settings, please contact us at support@telefanz.com.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Internal Policies and Access Controls.</strong> We implement and maintain internal policies and
              technical measures to restrict access to your personal information within our organization. Access to
              personal information within our organization is limited to employees who need the information to perform
              their job functions. For example, our customer support team may have access to certain types of
              information during our interactions with you, such as responding to complaints and inquiries. Similarly,
              our content moderators may access certain information in order to enforce our Terms of Service, Community
              Guidelines, and other conditions and policies.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data Retention Practices.</strong> We have procedures in place to limit the retention periods.
              When personal information is no longer needed for these purposes or is no longer required to be retained
              by law, we take appropriate steps to dispose of it securely in accordance with our internal procedures.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Transfer Outside Your Jurisdiction.</strong> We and our service providers (including members,
              subsidiaries, or affiliates of our corporate group) may access, store and otherwise process personal
              information outside of Canada (and, for residents of Quebec, outside of Quebec), including in the United
              States, Malaysia, Ireland, Singapore, and other foreign jurisdictions where we or our service providers
              are located. For information about how we or our service providers (including service providers outside
              Canada) process personal information, please contact us using the contact information set out below. We
              and our service providers may disclose your personal information if we are required or permitted by
              applicable law or legal process, which may include lawful access by foreign courts, law enforcement or
              other government authorities in the jurisdictions in which we or our service providers operate.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Egypt</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Egypt, the following additional terms apply.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              You declare that you are over the age of 18. If you are under the age of 18, please have your parent or
              legal guardian read this with you. If you are reviewing these terms as the parent/legal guardian of a user
              who is under the age of 18, you hereby declare that such user is above the age of 13 and that you have
              read and acknowledged Telefanz's Privacy Policy and Terms of Use and agree to the use by your child of the
              Platform and registration for an account.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Indonesia</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Indonesia, the following additional terms apply. In the event of any
              conflict between the following additional terms and the provisions of the main body of this policy, the
              following terms shall apply.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Age, Parental and Guardian Consent.</strong> By accessing and/or using this Platform, you
              represent that you are at least 21 years of age or married or not under guardianship. If you are below 21
              years old and you are not married, or under guardianship:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>you must obtain approval from your parent(s) or legal guardian(s); and</li>
              <li>
                your parent(s) or legal guardian(s) are responsible for: (i) all your actions in connection with your
                access to and use of the Platform; (ii) your compliance with this policy; and (iii) ensuring that any of
                your participation in the Platform will not, in any event, result in any violation of applicable laws
                and regulations relating to child protections.
              </li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              If you do not have consent from your parent(s) or legal guardian(s) and your parent(s) or guardian(s) is
              not willing to open the account under their name, you must cease accessing the Platform.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your Choices.</strong> You may withdraw your consent to Telefanz's disclosure of personal data to
              third parties. Upon your request, we will cease to display, publish, transmit, disseminate, and/or open
              the access to your personal data to third parties. Please note that by withdrawing your consent to the
              disclosure and/or collection of your personal data, we may not be able to fulfil your requests and you may
              not be able to use some of Telefanz features and functionality, and it might result in closing your
              account with Telefanz in some cases.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              You may request Telefanz to (i) disclose the history of personal data that we have collected; and/or (ii)
              erase and dispose of your personal data that we have collected on our server. Please note that by
              requesting us to erase and dispose of your personal data, you may not be able to use some of Telefanz's
              features and functionality and it might result in closing your account with Telefanz in some cases.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              To exercise any of your rights, contact us at support@telefanz.com.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Notification.</strong> In the event of any breach of personal data, we will notify you and provide
              you with information regarding such breach of personal data.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data retention.</strong> We retain your information for as long as it is necessary to provide you
              with the service. Where we do not need your information in order to provide the service to you, we retain
              it only for so long as we have a legitimate business purpose in keeping such data. However, there are
              occasions where we are likely to keep this data for five (5) years (or longer if required) in accordance
              with our legal obligations or where it is necessary for the establishment, exercise or defence of legal
              claims.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              After you have terminated your use of our Platform and the five (5) years retention period has lapsed, we
              store your information in an aggregated and anonymized format. Non-personally identifiable information may
              be retained indefinitely for analytics.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Mexico</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Mexico, the following additional terms apply. In the event of any
              conflict between the following additional terms and the provisions of the main body of this policy, the
              following terms shall prevail.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How we use your personal data.</strong> Almost all purposes of processing stated in this section
              of the main Privacy Policy are necessary purposes. However, the following are secondary purposes:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>Provide you with personalized advertising.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              The above purposes are not necessary for us to provide the Platform but allows us to provide you with a
              better experience. We offer you the possibility to take decisions regarding how we use and disclose your
              personal data. You can always limit the secondary purposes of personalized advertising by using the tools
              in Settings that allow you to limit certain functions.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              We use both human and automated means to process your data.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How we share your personal data.</strong> We may share your personal data to a third party for
              purposes other than processing on behalf of us. We will obtain your consent for such sharing as required
              by applicable laws.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              By providing us with your personal data and using our Platform you agree to the transfers that require
              your consent. You can always revoke your consent and exercise your rights, as stated below.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your Rights.</strong> You have the following rights with respect to your personal data: access,
              rectification, cancellation, opposition, consent withdrawal, limitation to the use and disclosure of your
              data. You can exercise your rights by sending your request to support@telefanz.com. To know more about the
              applicable requirements and procedure to exercise your rights, contact us to the mentioned email address.
              If you are under 18 years, you may exercise your rights through a parent or guardian. Your rights requests
              will be resolved as soon as possible according to the nature of your request.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Information relating to children.</strong> You may review our parental consent section in the
              Terms of Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Philippines</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in the Philippines, the following additional terms shall apply pursuant to
              the relevant laws, rules and regulations and issuances by the Philippines National Privacy Commission
              ("NPC") on data privacy.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Your Rights.</strong> To the extent that the relevant laws, rules and regulations on data privacy
              recognize your rights and freedoms as data subjects, you shall have the right to information, object,
              access, rectification, erasure or blocking, lodge complaints before the NPC, damages and data portability.
              Before we can respond to a request to exercise one or more of the rights listed above, you may be required
              to verify your identity or your account details.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Russia</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>What are legal grounds for data processing.</strong> When we process your personal data, we rely
              on the grounds of your consent, performance of a contract, our legitimate interest and obligations to
              process personal data, or when we are so required by law.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              By signing up and using the Platform, you consent to the processing of personal data in accordance with
              this Privacy Policy.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Where we store your personal data.</strong> Your personal data may be transferred from Russia to
              Telefanz servers' locations, outside of the country where you live.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Public profiles.</strong> We rely on your consent to public distribution of personal data, when
              your account settings are 'Public Profile'.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">South Africa</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in South Africa, the following additional terms apply.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              You declare that you are over the age of 18. If you are under the age of 18, please have your parent or
              legal guardian read this with you. If you are reviewing these terms as the parent/legal guardian of a user
              who is under the age of 18, you hereby declare that such user is above the age of 13 and that you have
              read and acknowledged Telefanz's Privacy Policy and Terms of Use and agree to the use by your child of the
              Platform and registration for an account.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">South Korea</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in South Korea, the following additional terms apply. In the event of any
              conflict between the following additional terms and the provisions of the main body of this policy, the
              following terms shall prevail.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How we share your personal data.</strong> In addition to the main text of this policy, in the
              event we use information such as user-generated content and video content on our Platform as part of our
              advertising and marketing campaigns to promote the Platform, your personal data contained in such
              information may be disclosed to the recipients of such advertising or marketing content.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Customized Ads.</strong> We may from time to time provide customized ads on our Platform to
              provide you our Platform for free.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data retention.</strong> We destroy personal data whose purpose of collection as consented to by
              you have been achieved, or whose periods of and use to which you consented to or which were provided in
              this privacy policy have expired; provided, however, we will continue to store your personal data for the
              following statutorily-prescribed periods where applicable.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Destruction of Personal data.</strong> We destroy your personal data in a manner that renders it
              unrestorable by the relevant department.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data rights.</strong> You have the right to access personal data we hold about you, to rectify any
              personal data held about you that is inaccurate, to request the deletion of personal data held about you,
              and the right to request the suspension of the processing of your personal data. You can exercise your
              rights by contacting us at support@telefanz.com.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data Security.</strong> We work hard to protect Telefanz and our users from unauthorized access to
              or unauthorized alteration, disclosure or destruction of information we hold. To this end, we have in
              place technical, managerial and physical safeguards, including internal policy for data protection,
              limiting the access to personal data on a need-to-know basis and controlling access to the facilities
              where personal data is processed.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Information Relating to Children.</strong> Telefanz is not directed at children under the age of
              14.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Entrustment and/or Overseas Transfer of Personal Data.</strong> We entrust your data to our
              affiliates, cloud storage providers and IT service providers, some of whom are located abroad, subject to
              your consents or notifications to you, if applicable. Where appropriate, we ensure that such entities
              which receive and process your data are subject to contractual obligations to store and use personal data
              in compliance with applicable domestic and international regulations and take appropriate physical and
              technical measures to protect personal data. You may opt-out of such transfer so long as the transfer is
              not necessary to provide you with the Service, by contacting us.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Türkiye</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Türkiye, we comply with Law No. 6698 on the Protection of Personal Data.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">United Arab Emirates</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using the Platform in the United Arab Emirates ("UAE"), the following additional terms apply.
              If any conflict arises between the main Privacy Policy and the additional terms, the following terms shall
              prevail:
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How we share your personal data:</strong> In addition to the main text of this policy, by using
              the Platform in the UAE you agree to the terms of this Privacy Policy and consent to our sharing of your
              personal data in line with the main text of this Privacy Policy.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Governing law and dispute resolution:</strong> By using our Platform in the UAE, this Privacy
              Policy will be governed by and interpreted in accordance with the laws of the UAE. In the event of a
              dispute arising between the parties in connection with this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>
                where the dispute relates to a claim for a sum within the limits specified by the DIFC Small Claims
                Tribunal from time to time, then the dispute shall be referred by either party to the said Tribunal; and
              </li>
              <li>
                for all other disputes, the parties shall seek settlement of that dispute by mediation in accordance
                with the Mediation Rules of the DIFC-LCIA Arbitration Centre, which Rules are deemed to be incorporated
                by reference to this clause. If the dispute is not settled by mediation within 30 days of the
                commencement of the mediation, or such further period as the parties shall agree in writing, the dispute
                shall be referred to and finally resolved by arbitration under the Arbitration Rules of the DIFC-LCIA
                Arbitration Centre, which Rules are deemed to be incorporated by reference to this clause. The language
                to be used in the mediation and in the arbitration, shall be English. In any arbitration commenced
                pursuant to this clause the number of arbitrators shall be one and the arbitration shall be conducted in
                Dubai.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Vietnam</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              If you are using our services in Vietnam, the following additional terms apply. In the event of any
              conflict between the following additional terms and the provisions of the main body of this policy, the
              following terms shall prevail.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Methods of processing your personal data.</strong> We may process your personal data by manual or
              automated methods.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Data subject's rights and obligations.</strong> Subject to certain exceptions, you have statutory
              rights and obligations under applicable laws. In particular, you have the following statutory rights:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>Right to know;</li>
              <li>Right to consent and withdraw consent;</li>
              <li>Right to access;</li>
              <li>Right to delete data;</li>
              <li>Right to restrict data processing;</li>
              <li>Right to be provided with data;</li>
              <li>Right to object data processing;</li>
              <li>Right to complain, denounce or initiate lawsuits;</li>
              <li>Right to claim for damages; and</li>
              <li>Right to self-protection.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              You may exercise these rights by contacting us through the details in the Contact section, and we will
              respond to your requests regardless of the location in which your data is stored.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">You have the following statutory obligations:</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>Protect your own personal data;</li>
              <li>Request other relevant organizations and individuals to protect your personal data;</li>
              <li>Respect and protect personal data of others;</li>
              <li>
                Provide complete and accurate personal data upon giving consent to the processing of your personal data;
                and
              </li>
              <li>Other obligations under applicable laws.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Age, Parental and Guardian Consent.</strong> If you are below 16 years old or under guardianship:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>you must obtain approval from your parent(s) or legal guardian(s); and</li>
              <li>
                your parent(s) or legal guardian(s) are responsible for: (i) all your actions in connection with your
                access to and use of the Platform; (ii) your compliance with this policy; and (iii) ensuring that any of
                your participation in the Platform will not, in any event, result in any violation of applicable laws
                and regulations relating to child protections.
              </li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              If you do not have consent from your parent(s) or legal guardian(s) and your parent(s) or legal
              guardian(s) is not willing to open the account under their name, you must cease accessing the Platform if
              you are not at least 16 years of age.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Other Jurisdictions</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              In jurisdictions where the national or official language is not English, the version of the Telefanz
              Privacy Policy in your local language may set out additional terms specific to your jurisdiction.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
