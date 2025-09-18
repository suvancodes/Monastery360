import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"

const monasteries = [
  {
    id: 1,
    title: "Rumtek Monastery",
    description:
      "One of the most important monasteries in Sikkim, seat of the Karmapa. Known for its stunning architecture and golden stupa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumtek_Monastery.jpg",
    location: "East Sikkim",
    founded: "16th century (rebuilt in 1960s)",
  },
  {
    id: 2,
    title: "Pemayangtse Monastery",
    description:
      "One of the oldest monasteries in Sikkim, belonging to the Nyingma sect. Famous for the wooden structure 'Zangdok Palri'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pemayangtse_Monastery.jpg",
    location: "West Sikkim",
    founded: "1705",
  },
  {
    id: 3,
    title: "Tashiding Monastery",
    description: "A sacred monastery, considered the heart of Sikkim. Hosts the famous Bumchu Festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tashiding_Monastery.jpg",
    location: "West Sikkim",
    founded: "1641",
  },
  {
    id: 4,
    title: "Phodong Monastery",
    description: "Important Kagyu monastery in North Sikkim, known for its annual Cham dance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Phodong_Monastery.jpg",
    location: "North Sikkim",
    founded: "18th century",
  },
  {
    id: 5,
    title: "Enchey Monastery",
    description: "A small but significant monastery near Gangtok, surrounded by scenic views of Kanchenjunga.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Enchey_Monastery.jpg",
    location: "Gangtok, East Sikkim",
    founded: "1909",
  },
  {
    id: 6,
    title: "Ralang Monastery",
    description:
      "A modern monastery with grand architecture, home to more than 100 monks. Known for its huge collection of thangkas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Ralang_Monastery.jpg",
    location: "South Sikkim",
    founded: "1995",
  },
  {
    id: 7,
    title: "Dubdi Monastery",
    description:
      "Also called Yuksom Monastery, it is the oldest monastery in Sikkim, located on a hilltop with a panoramic view.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Dubdi_Monastery.jpg",
    location: "Yuksom, West Sikkim",
    founded: "1701",
  },
  {
    id: 8,
    title: "Lingdum Monastery (Ranka)",
    description: "A relatively new monastery with beautiful architecture, often used in Bollywood films.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Lingdum_Monastery.jpg",
    location: "East Sikkim",
    founded: "1990s",
  },
  {
    id: 9,
    title: "Phensang Monastery",
    description: "Belonging to the Nyingmapa order, this monastery is known for its annual festival before Losoong.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Phensang_Monastery.jpg",
    location: "North Sikkim",
    founded: "1721",
  },
  {
    id: 10,
    title: "Zang Dhok Palri Phodang",
    description: "Home to rare scriptures brought from Tibet by the 12th Dalai Lama.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Zang_Dhok_Palri_Phodang.jpg",
    location: "Gangtok, East Sikkim",
    founded: "20th century",
  },
  {
    id: 11,
    title: "Sangachoeling Monastery",
    description: "Ancient monastery with forested surroundings, important historically.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sangachoeling_Monastery.jpg/1200px-Sangachoeling_Monastery.jpg",
    location: "West Sikkim",
    founded: "17th–18th c.",
  },
  {
    id: 12,
    title: "Rinchenpong Monastery",
    description: "Hilltop gompa with views, active community.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/View_of_rinchenpong_monastery_entry.JPG/1200px-View_of_rinchenpong_monastery_entry.JPG",
    location: "West Sikkim",
    founded: "19th c.",
  },
  {
    id: 13,
    title: "Labrang (East) Monastery",
    description: "Smaller monastery linked to local community practice.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFPadhkjBI7c74TsBkLLmFczIQ6TueArXUA&s",
    location: "Phodong area",
    founded: "19th century",
  },
  {
    id: 14,
    title: "Simik Monastery",
    description: "Local Nyingma gompa serving nearby villages.",
    image: "https://vushii.com/uploads/737417264_Simik%20Monastery.jpg",
    location: "Simik",
    founded: "18th–19th century (approx)",
  },
  {
    id: 15,
    title: "Zurmang Kagyud Monastery",
    description: "Important Kagyu lineage center (Zurmang).",
    image:
      "https://c8.alamy.com/comp/2JJFGFK/17-june-2022-gangtok-sikkim-ranka-lingdum-or-pal-zurmang-kagyud-golden-temple-monastery-in-gangtok-2JJFGFK.jpg",
    location: "Lingdum area",
    founded: "15th–19th century (reconstructed)",
  },
  {
    id: 16,
    title: "Sankhu Monastery",
    description: "Hilltop gompa with calm surroundings and community worship.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHIbBkmlIsrQOqRNAug0z1GhEXCdHXeA&s",
    location: "Near Pakyong/Gangtok",
    founded: "17th–18th century (approx)",
  },
  {
    id: 17,
    title: "Thami Monastery",
    description: "Small traditional monastery with local murals.",
    image: "https://www.mediastorehouse.com/p/191/window-thami-gompa-monastery-1179537.jpg.webp",
    location: "East Sikkim (rural)",
    founded: "18th century (approx)",
  },
  {
    id: 18,
    title: "Gunjang Monastery",
    description: "Community gompa for daily prayers and rites.",
    image: "https://sikkimtourism.org/wp-content/uploads/2022/04/Gonjang-Monastery-700x500.jpg",
    location: "Near Gangtok",
    founded: "19th century (approx)",
  },
  {
    id: 19,
    title: "Phodrang (local small gompa)",
    description: "Local hilltop monastery; small group of resident monks.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/phodong-monastery-gangtok-sikkim-gangtok-1-musthead-hero?qlt=82&ts=1742153343325",
    location: "East Sikkim",
    founded: "18th–19th c.",
  },
  {
    id: 20,
    title: "Rinchenpong Gonpa (East cluster)",
    description: "Local monastery serving nearby settlements.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucPZoWBQhKMUMZDNTpk5o0YsREeS0dlVn6w&s",
    location: "East Sikkim outskirts",
    founded: "19th century",
  },
  {
    id: 21,
    title: "Tingvong Monastery (East)",
    description: "Small regional gompa.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-6YP8wGxGTHde_IaNs035e2zeU0Ajy29IA&s",
    location: "East Sikkim",
    founded: "19th c.",
  },
  {
    id: 22,
    title: "Lum Monastery",
    description: "Village monastery, community festivals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ojusaLPztWOVigS_luccZtTrxIsBMkHYKg&s",
    location: "East Sikkim",
    founded: "19th c.",
  },
  {
    id: 23,
    title: "Kartok (Karthok) Monastery",
    description: "Historic monastery near coronation/place of founder kings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHn71WE7ourW7w57BgQDAaSp6PXmH3eX_Z_A&s",
    location: "Yuksom",
    founded: "18th c.",
  },
  {
    id: 24,
    title: "Norbugang Monastery",
    description: "Site near coronation stone; local gompa with pilgrimage value.",
    image: "https://1001things.org/wp-content/uploads/2016/05/Norbugang-Chorten-and-coronation-throne-Chorten.jpg",
    location: "Yuksom area",
    founded: "Early 18th c.",
  },
  {
    id: 25,
    title: "Gyalshing Monastery",
    description: "Regional centre for Buddhist worship.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dubdi-monastery-pelling-sikkim-tri-hero?qlt=82&ts=1727166828651",
    location: "Gyalshing (Geyzing)",
    founded: "19th c.",
  },
  {
    id: 26,
    title: "Darap Monastery",
    description: "Scenic village monastery with community ties.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F7vz0weHi1gKTexev_EulGhSMF9EZFqesA&s",
    location: "Darap (near Gyalshing)",
    founded: "19th c.",
  },
  {
    id: 27,
    title: "Hee-Bermiok Monastery",
    description: "Local gompa for village ceremonies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4y426EUh2k7RDOD6Mq8noHXjr7UOKPjv2lQ&s",
    location: "Hee-Bermiok",
    founded: "19th c.",
  },
  {
    id: 28,
    title: "Khecheopalri (Khecheopalri Lake & Gompa)",
    description: "Sacred lake and nearby gompa; pilgrimage site.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKc0Q0vlhsCR4KYm4OvxT0vBGZfCQ6PUvGKQ&s",
    location: "Near Khecheopalri (West)",
    founded: "Traditional/ancient (local legend)",
  },
  {
    id: 29,
    title: "Hongri Monastery",
    description: "Small local monastery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsSdKS2R8vnLI9D8PcBwQ_9Isc1qqUJwmSQ&s",
    location: "West Sikkim villages",
    founded: "19th c.",
  },
  {
    id: 30,
    title: "Barfung Monastery",
    description: "Lesser-known regional monastery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ429QXsVpAWBSfIf22OPPEZi-7QuKPYbdA&s",
    location: "West Sikkim",
    founded: "19th c.",
  },
  {
    id: 31,
    title: "Sanga Choeling Monastery (alt listing)",
    description: "Ancient meditation center and pilgrimage stop.",
    image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/sanacholeing-monastery-bnnr.jpg",
    location: "West Sikkim",
    founded: "17th c.",
  },
  {
    id: 32,
    title: "Tarkeghyang Monastery (West cluster)",
    description: "Small monastery associated with local lineage.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=1200&h=-1&s=1",
    location: "West Sikkim",
    founded: "18th–19th c.",
  },
  {
    id: 33,
    title: "Lachen Monastery (Gompa)",
    description: "Monastery serving Lachen valley (Lachen Gompa); base for valley rituals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CzJmZacWwt4XspBTNAxDfTU",
    location: "Lachen",
    founded: "19th-20th c.",
  },
  {
    id: 34,
    title: "Lachung Monastery",
    description: "Key gompa for Lachung village; hosts community rituals.",
    image: "https://www.shutterstock.com/image-photo/lachung-monastery-located-on-river-260nw-2296",
    location: "Lachung",
    founded: "19th-20th c.",
  },
  {
    id: 35,
    title: "Tholung Monastery",
    description: "Very sacred monastery with preserved relics and restricted access (seasonal).",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6bfkTPljO8py4pGKuI9LWM9cm",
    location: "Dzongu / North Sikkim",
    founded: "18th c. (consecrated)",
  },
  {
    id: 36,
    title: "Tingchim Monastery",
    description: "Local monastery serving villages.",
    image: "https://www.northsikkimtourism.com/wp-content/gallery/tingchim-north-sikkim/tingchim",
    location: "North Sikkim",
    founded: "19th c.",
  },
  {
    id: 37,
    title: "Ringhim Monastery",
    description: "Hilltop gompa with views and small monk population.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrtXqBVm7XZCgavCpwHln0DN8oO",
    location: "North Sikkim",
    founded: "19th c.",
  },
  {
    id: 38,
    title: "Mangue Monastery",
    description: "Local community monastery.",
    image: "http://t2.gstatic.com/images?q=tbn:ANd9GcS2tINGn6uw8uRfoNbQ9q6vjI7UEXethgoktoSFX",
    location: "North Sikkim",
    founded: "19th c.",
  },
  {
    id: 39,
    title: "Chungthang Monastery",
    description: "Important gompa near confluence of rivers; historical importance.",
    image: "https://www.thetourindia.com/flashphotos/photos/8b230abcafe506769b8dcf1aad1d2eb1.webp",
    location: "Chungthang",
    founded: "18th-19th c.",
  },
  {
    id: 40,
    title: "Goecha Monastery (Goecha La area)",
    description: "Pilgrim base for Goecha La trekking area; small gompa.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV6VZU7dmG80igq1hOnn00U8FNV",
    location: "Near Goecha La / West-North border",
    founded: "20th c.",
  },
  {
    id: 41,
    title: "Ringpa Monastery",
    description: "Local hilltop gompa.",
    image: "https://1001things.org/wp-content/uploads/2019/02/Lingdum-6-1200x797.jpg",
    location: "North Sikkim",
    founded: "19th c.",
  },
  {
    id: 42,
    title: "Zongri Monastery",
    description: "Small gompa used by trekkers and shepherd communities.",
    image: "https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl79173Bi",
    location: "North Sikkim (trekking routes)",
    founded: "20th c.",
  },
  {
    id: 43,
    title: "Ringdom Monastery",
    description: "Rural monastery with local festivals.",
    image: "https://www.shutterstock.com/image-photo/rangdum-ringdom-buddhist-monastery-suru-2",
    location: "North Sikkim",
    founded: "19th c.",
  },
  {
    id: 44,
    title: "Namchi Monastery (Samdruptse complex)",
    description: "Large modern complex featuring giant Buddha statue and temples; pilgrimage & tourist site.",
    image: "https://indroyc.com/wp-content/uploads/2014/06/samdruptse-monastery.jpg",
    location: "Namchi",
    founded: "20th c. (recent additions)",
  },
  {
    id: 45,
    title: "Samdruptse Monastery",
    description: "Part of Samdruptse cultural complex, large modern shrine.",
    image: "https://www.shutterstock.com/image-photo/samdruptse-monastery-sikkim-india-future-260nw-1163467876.jpg",
    location: "Namchi",
    founded: "Late 20th–21st c.",
  },
  {
    id: 46,
    title: "Ralang Monastery",
    description: "Historic gompa with vibrant rituals; also Ralong Palchen Choling nearby.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=1200&h=-1&s=1",
    location: "Ralang (South)",
    founded: "18th-19th c.",
  },
  {
    id: 47,
    title: "Ravangla Monastery (Ralong Palchen Choling / Buddha Park area)",
    description: "Modern monastery near Ravangla; tourist & pilgrimage focus.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlETZOvi7DkdqlHUYnBw6DW4dn5Up2qS56g&s",
    location: "Ravangla/Kewzing",
    founded: "1960s-modern",
  },
  {
    id: 48,
    title: "Tendong Monastery",
    description: "Hill monastery associated with Tendong rock & local legends.",
    image: "https://www.thetourindia.com/flashphotos/photos/8b230abcafe506769b8dcf1aad1d2eb1.webp",
    location: "Tendong hill area",
    founded: "Traditional (old regional shrine)",
  },
  {
    id: 49,
    title: "Kitam Monastery",
    description: "Village monastery, community center.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzE8omeaLkM9kQLhCw5hs9u64urJ663KHw&s",
    location: "South Sikkim (Kitam)",
    founded: "19th c.",
  },
  {
    id: 50,
    title: "Tarey Bhir Monastery",
    description: "Small cliff-side gompa.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/88/f1/68/tarey-bhir-cliff-sadam.jpg?w=1200&h=-1&s=1",
    location: "South Sikkim cliffs/area",
    founded: "19th c.",
  },
  {
    id: 51,
    title: "Kewzing Monastery",
    description: "Local monastery for Kewzing village.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYZVcF-SQUQd1ppTTfMmiO1jpb2uzhQe1rBA&s",
    location: "Kewzing area",
    founded: "20th c.",
  },
  {
    id: 52,
    title: "Bon Monastery (Kewzing area)",
    description: "One of the few Bon sites in Sikkim region.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlHFQeBJzNLj97G7DYfn5xuqz6HMnCG82_w&s",
    location: "Kewzing (Bon tradition)",
    founded: "Traditional (Bon presence)",
  },
  {
    id: 53,
    title: "Yangang Monastery",
    description: "Local gompa for community rituals.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=400&h=300&s=1",
    location: "Yangang",
    founded: "19th c.",
  },
  {
    id: 54,
    title: "Sumbuk Monastery",
    description: "Village monastery.",
    image:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcS2tINGn6uw8uRfoNbQ9q6vjI7UEXethgoktoSFXRUmxwtkPpiGZ1S1jQkjLezSwzYRPqJs_8l",
    location: "Sumbuk",
    founded: "19th c.",
  },
]

export function VirtualToursGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {monasteries.map((monastery) => (
        <Card key={monastery.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video overflow-hidden">
            <img
              src={monastery.image || "/placeholder.svg"}
              alt={monastery.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/buddhist-monastery-in-sikkim-mountains.jpg"
              }}
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{monastery.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{monastery.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{monastery.description}</p>
            <p className="text-xs text-muted-foreground">Founded: {monastery.founded}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/virtual-tours/${monastery.id}`} className="w-full">
              <Button className="w-full group">
                <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Tour
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
