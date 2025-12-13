"use client"

import { Newspaper, ExternalLink, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const newsItems = [
  {
    title: "Telefanz rivals TikTok with a mission to improve social media",
    source: "Khaleej Times",
    date: "June 24, 2024",
    description:
      "The new social media platform “Telefanz” aims to compete with other social media platforms, particularly TikTok, offering an easy-to-use app in 17 languages, original content done by verified Creators and Streamers only, and a secure community.",
    url: "https://www.khaleejtimes.com/kt-network/telefanz-rivals-tiktok-with-a-mission-to-improve-social-media",
    image: "https://imgengine.khaleejtimes.com/khaleejtimes/import/images/KdPpGYX0CY736gkG2mQF22sOPSc.jpg?width=1200&height=800&format=auto",
  },
  {
    title: "The newly launched worldwide Social Media app “Telefanz” rivals the popular Social Media apps and aims to make Social Media a Better Place",
    source: "Ap News",
    date: "July 09, 2024",
    description:
      "“Telefanz”, the new social media platform for exciting, spontaneous, genuine videos and photos, was officially launched last month with the slogan ‘Social Media Made Better’. Competing with leading platforms like TikTok, “Telefanz” stands out with SocialFi features. It also features Approved & Verified Content Creators, original content, and a secure community, along with support for 17 languages.",
    url: "https://apnews.com/press-release/marketersmedia/social-media-software-6e0b4edce08efd93418376505dcf232e",
    image: "https://dims.apnews.com/dims4/default/89fb3d1/2147483647/strip/true/crop/800x533+0+0/resize/800x533!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4c%2F89%2Fde97f70e120246d9dcca3fe2fc1e%2F2bc9b17194aed6e6757b055ec482218f",
  },
  {
    title: "Telefanz Social media platform",
    source: "TADVISERS",
    date: "July 09, 2024",
    description:
      "Telefanz provides users with quick login to the platform using Email, Google or Apple Login. The application also provides search for content creators by category and subscription only to those who are in the interests of users. In addition, in the profile settings, it is possible to apply for a verified account without requiring a minimum number of Fanz (subscribers).",
    url: "https://tadviser.com/index.php/Product:Telefanz_Social_media_platform",
    image: "https://upworkpreview.com/i/https://www.tadviser.ru/images/a/a9/Ta03.png",
  },
  {
    title: "Telefanz: The Newest Social Media Platform With A Mission To Redefine Social Media",
    source: "Think Marketing magazine",
    date: "June 24, 2024",
    description:
      "The newest social media platform, Telefanz, has officially launched this June with the slogan “Social Media Made Better.” Designed to bring a fresh perspective to the digital world, Telefanz aims to create a more enjoyable and secure online environment, setting its sights on competing with giants like TikTok. The app’s mission is to redefine how people connect, engage, and earn online, promising a revolutionary shift in the social media landscape.",
    url: "https://thinkmarketingmagazine.com/telefanz-the-newest-social-media-platform-with-a-mission-to-redefine-social-media/",
    image: "https://thinkmarketingmagazine.com/wp-content/uploads/2024/06/Telefanz-The-Newest-Social-Media-Platform-With-A-Mission-To-Redefine-Social-Media.jpg",
  },
  {
    title: "The newly launched worldwide Social Media app “Telefanz” rivals TikTok and aims to make Social Media a Better Place",
    source: "EyeofRiyadh",
    date: "June 24, 2024",
    description:
      "The new social media platform “Telefanz” aims to compete with other social media platforms, particularly TikTok, offering an easy-to-use app in 17 languages, original content done by verified Creators and Streamers only, and a secure community.",
    url: "https://www.eyeofriyadh.com/news/details/the-newly-launched-worldwide-social-media-app-telefanz-rivals-tiktok-and-aims-to-make-social-media-a-better-place",
    image: "https://www.eyeofriyadh.com/news_images/2024/06/7be86d7821024f32c657f1d63c1768f8411.jpg",
  },
  {
    title: "New Global App to Rival TikTok",
    source: "IT News Africa",
    date: "June 24, 2024",
    description:
      "Telefanz, the new social media platform for exciting, spontaneous, genuine videos and photos, officially launched in June with the slogan ‘Social Media Made Better’.",
    url: "https://www.itnewsafrica.com/2024/06/new-global-app-to-rival-tiktok/",
    image: "/images/news-placeholder.jpeg",
  },
  {
    title: "The new global social media app “Telefanz” is competing with TikTok and aims to make social media a better place.",
    source: "Mangish",
    date: "June 24, 2024",
    description:
      "The new social media application “Telefanz” seeks to enter the competition with other social media platforms, most notably TikTok, by offering an easy-to-use application available in 17 languages, original content and live streaming created by verified content creators, in addition to ensuring a safe community.",
    url: "https://mangish.net/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d8%a7%d9%84%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d9%8a-%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85%d9%8a-%d8%a7%d9%84%d8%ac%d8%af/",
    image: "https://mangish.net/file/2023/09/%D9%85%D8%A7%D9%86%D9%83%D9%8A%D8%B4-%D9%86%D8%AA-780x470.png",
  },
  {
    title: "Telefanz: The New Social Media Challenger to TikTok",
    source: "Analytics Insight",
    date: "June 24, 2024",
    description:
      "TikTok, the short video platform, really became quite the phenomenon and continued to make a dent worldwide.",
    url: "https://www.analyticsinsight.net/tech-news/telefanz-the-new-social-media-challenger-to-tiktok",
    image: "https://media.assettype.com/analyticsinsight%2F2024-06%2Fa50e3a9e-0258-4b13-9992-70b45c6fa28a%2FTelefanz_The_New_Social_Media_Challenger_to_TikTok.jpg?w=768&auto=format%2Ccompress&fit=max",
  },
  {
    title: "Telefanz, a new social media platform that competes with TikTok, has been released.",
    source: "C News",
    date: "July 09, 2024",
    description: "The new social media platform Telefanz aims to compete with other social media platforms, particularly TikTok, by offering an app in 17 languages, including Russian, as well as original content created only by verified creators and streamers, and a safe community. Telefanz representatives told CNews this.",
    url: "https://www.cnews.ru/news/line/2024-07-09_vyshla_novaya_sotsialnaya_mediaplatforma",
    image: "https://static.cnews.ru/img/news/2024/07/09/image_4.jpg",
  },
  {
    title: "علامة زرقاء مجّانا والأرباح بالنصف مع المستخدمين.. تطبيق جديد ينافس “تيك توك”",
    source: "Annas",
    date: "June 24, 2024",
    description: "انطلق رسميًا هذا الشهر تطبيق جديد للتواصل الاجتماعي هو “تيلي فانز””Telefanz”  الذي يركز على المحتوى المثير والعفوي والحقيقية من مقاطع الفيديو والصور، تحت شعار “وسائل تواصل اجتماعي بشكل أفضل”.",
    url: "https://annass.com/%D8%B9%D9%84%D8%A7%D9%85%D8%A9-%D8%B2%D8%B1%D9%82%D8%A7%D8%A1-%D9%85%D8%AC%D9%91%D8%A7%D9%86%D8%A7-%D9%88%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%A7%D8%AD-%D8%A8%D8%A7%D9%84%D9%86%D8%B5%D9%81-%D9%85%D8%B9/",
    image: "https://annass.com/storage/2024/06/Capture-decran-2024-06-24-a-14.36.11-750x430.png",
  },
]

export function NewsMediaSection() {
  return (
    <section id="news" className="mt-20 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <Newspaper className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">News & Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Telefanz in the <span className="text-gradient-purple">Headlines</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            See what the world is saying about Telefanz and our mission to empower creators everywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative rounded-3xl overflow-hidden",
                "glass-card",
                "hover:border-purple-500/30 transition-all duration-500",
                "hover:-translate-y-2 cursor-pointer block",
              )}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Source badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-500/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">{item.source}</span>
                </div>

                {/* External link indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white/40">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{item.description}</p>

                {/* Read more */}
                <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Read Article</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
