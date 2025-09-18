"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star } from "lucide-react"

interface Monastery {
  id: number
  name: string
  location: string
  description: string
  established: string
  visitors: string
  rating: number
  coordinates: { x: number; y: number }
  image: string
}

const monasteries: Monastery[] = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    description:
      "One of the most important monasteries in Sikkim, seat of the Karmapa. Known for its stunning architecture and golden stupa.",
    established: "16th century (rebuilt in 1960s)",
    visitors: "50,000+ annually",
    rating: 4.8,
    coordinates: { x: 65, y: 45 },
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumtek_Monastery.jpg",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    description:
      "One of the oldest monasteries in Sikkim, belonging to the Nyingma sect. Famous for the wooden structure 'Zangdok Palri'.",
    established: "1705",
    visitors: "30,000+ annually",
    rating: 4.7,
    coordinates: { x: 25, y: 55 },
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pemayangtse_Monastery.jpg",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    description: "A sacred monastery, considered the heart of Sikkim. Hosts the famous Bumchu Festival.",
    established: "1641",
    visitors: "25,000+ annually",
    rating: 4.6,
    coordinates: { x: 35, y: 65 },
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tashiding_Monastery.jpg",
  },
  {
    id: 4,
    name: "Phodong Monastery",
    location: "North Sikkim",
    description: "Important Kagyu monastery in North Sikkim, known for its annual Cham dance.",
    established: "18th century",
    visitors: "12,000+ annually",
    rating: 4.3,
    coordinates: { x: 55, y: 25 },
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Phodong_Monastery.jpg",
  },
  {
    id: 5,
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    description: "A small but significant monastery near Gangtok, surrounded by scenic views of Kanchenjunga.",
    established: "1909",
    visitors: "20,000+ annually",
    rating: 4.5,
    coordinates: { x: 70, y: 40 },
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Enchey_Monastery.jpg",
  },
  {
    id: 6,
    name: "Ralang Monastery",
    location: "South Sikkim",
    description:
      "A modern monastery with grand architecture, home to more than 100 monks. Known for its huge collection of thangkas.",
    established: "1995",
    visitors: "22,000+ annually",
    rating: 4.5,
    coordinates: { x: 45, y: 75 },
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Ralang_Monastery.jpg",
  },
  {
    id: 7,
    name: "Dubdi Monastery",
    location: "Yuksom, West Sikkim",
    description:
      "Also called Yuksom Monastery, it is the oldest monastery in Sikkim, located on a hilltop with a panoramic view.",
    established: "1701",
    visitors: "15,000+ annually",
    rating: 4.4,
    coordinates: { x: 20, y: 70 },
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Dubdi_Monastery.jpg",
  },
  {
    id: 8,
    name: "Lingdum Monastery (Ranka)",
    location: "East Sikkim",
    description: "A relatively new monastery with beautiful architecture, often used in Bollywood films.",
    established: "1990s",
    visitors: "18,000+ annually",
    rating: 4.4,
    coordinates: { x: 68, y: 42 },
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Lingdum_Monastery.jpg",
  },
  {
    id: 9,
    name: "Phensang Monastery",
    location: "North Sikkim",
    description: "Belonging to the Nyingmapa order, this monastery is known for its annual festival before Losoong.",
    established: "1721",
    visitors: "10,000+ annually",
    rating: 4.2,
    coordinates: { x: 50, y: 20 },
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Phensang_Monastery.jpg",
  },
  {
    id: 10,
    name: "Zang Dhok Palri Phodang",
    location: "East Sikkim",
    description: "Home to rare scriptures brought from Tibet by the 12th Dalai Lama.",
    established: "1962",
    visitors: "8,000+ annually",
    rating: 4.1,
    coordinates: { x: 72, y: 38 },
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Zang_Dhok_Palri_Phodang.jpg",
  },
  {
    id: 11,
    name: "Sangachoeling Monastery",
    location: "West Sikkim",
    description: "Ancient monastery with forested surroundings, important historically.",
    established: "1697",
    visitors: "14,000+ annually",
    rating: 4.3,
    coordinates: { x: 28, y: 58 },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sangachoeling_Monastery.jpg/1200px-Sangachoeling_Monastery.jpg",
  },
  {
    id: 12,
    name: "Rinchenpong Monastery",
    location: "West Sikkim",
    description: "Hilltop gompa with views, active community.",
    established: "1730",
    visitors: "6,000+ annually",
    rating: 4.0,
    coordinates: { x: 30, y: 62 },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/View_of_rinchenpong_monastery_entry.JPG/1200px-View_of_rinchenpong_monastery_entry.JPG",
  },
  {
    id: 13,
    name: "Labrang (East) Monastery",
    location: "Phodong area",
    description: "Smaller monastery linked to local community practice.",
    established: "19th century",
    visitors: "3,000+ annually",
    rating: 3.9,
    coordinates: { x: 58, y: 28 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFPadhkjBI7c74TsBkLLmFczIQ6TueArXUA&s",
  },
  {
    id: 14,
    name: "Simik Monastery",
    location: "Simik",
    description: "Local Nyingma gompa serving nearby villages.",
    established: "18th–19th century",
    visitors: "2,500+ annually",
    rating: 3.8,
    coordinates: { x: 62, y: 35 },
    image: "https://vushii.com/uploads/737417264_Simik%20Monastery.jpg",
  },
  {
    id: 15,
    name: "Zurmang Kagyud Monastery",
    location: "Lingdum area",
    description: "Important Kagyu lineage center (Zurmang).",
    established: "15th–19th century",
    visitors: "5,000+ annually",
    rating: 4.1,
    coordinates: { x: 66, y: 44 },
    image:
      "https://c8.alamy.com/comp/2JJFGFK/17-june-2022-gangtok-sikkim-ranka-lingdum-or-pal-zurmang-kagyud-golden-temple-monastery-in-gangtok-2JJFGFK.jpg",
  },
  {
    id: 16,
    name: "Sankhu Monastery",
    location: "Near Pakyong/Gangtok",
    description: "Hilltop gompa with calm surroundings and community worship.",
    established: "17th–18th century",
    visitors: "4,000+ annually",
    rating: 3.9,
    coordinates: { x: 74, y: 48 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHIbBkmlIsrQOqRNAug0z1GhEXCdHXeA&s",
  },
  {
    id: 17,
    name: "Thami Monastery",
    location: "East Sikkim (rural)",
    description: "Small traditional monastery with local murals.",
    established: "18th century",
    visitors: "2,000+ annually",
    rating: 3.7,
    coordinates: { x: 78, y: 52 },
    image: "https://www.mediastorehouse.com/p/191/window-thami-gompa-monastery-1179537.jpg.webp",
  },
  {
    id: 18,
    name: "Gunjang Monastery",
    location: "Near Gangtok",
    description: "Community gompa for daily prayers and rites.",
    established: "19th century",
    visitors: "3,500+ annually",
    rating: 3.8,
    coordinates: { x: 67, y: 43 },
    image: "https://sikkimtourism.org/wp-content/uploads/2022/04/Gonjang-Monastery-700x500.jpg",
  },
  {
    id: 19,
    name: "Phodrang (local small gompa)",
    location: "East Sikkim",
    description: "Local hilltop monastery; small group of resident monks.",
    established: "18th–19th c.",
    visitors: "1,500+ annually",
    rating: 3.6,
    coordinates: { x: 75, y: 46 },
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/phodong-monastery-gangtok-sikkim-gangtok-1-musthead-hero?qlt=82&ts=1742153343325",
  },
  {
    id: 20,
    name: "Rinchenpong Gonpa (East cluster)",
    location: "East Sikkim outskirts",
    description: "Local monastery serving nearby settlements.",
    established: "19th century",
    visitors: "2,800+ annually",
    rating: 3.7,
    coordinates: { x: 80, y: 50 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucPZoWBQhKMUMZDNTpk5o0YsREeS0dlVn6w&s",
  },
  {
    id: 21,
    name: "Tingvong Monastery (East)",
    location: "East Sikkim",
    description: "Small regional gompa.",
    established: "19th c.",
    visitors: "1,800+ annually",
    rating: 3.5,
    coordinates: { x: 76, y: 54 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-6YP8wGxGTHde_IaNs035e2zeU0Ajy29IA&s",
  },
  {
    id: 22,
    name: "Lum Monastery",
    location: "East Sikkim",
    description: "Village monastery, community festivals.",
    established: "19th c.",
    visitors: "2,200+ annually",
    rating: 3.6,
    coordinates: { x: 73, y: 49 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ojusaLPztWOVigS_luccZtTrxIsBMkHYKg&s",
  },
  {
    id: 23,
    name: "Kartok (Karthok) Monastery",
    location: "Yuksom",
    description: "Historic monastery near coronation/place of founder kings.",
    established: "18th c.",
    visitors: "4,500+ annually",
    rating: 4.0,
    coordinates: { x: 18, y: 72 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHn71WE7ourW7w57BgQDAaSp6PXmH3eX_Z_A&s",
  },
  {
    id: 24,
    name: "Norbugang Monastery",
    location: "Yuksom area",
    description: "Site near coronation stone; local gompa with pilgrimage value.",
    established: "Early 18th c.",
    visitors: "5,200+ annually",
    rating: 4.1,
    coordinates: { x: 22, y: 68 },
    image: "https://1001things.org/wp-content/uploads/2016/05/Norbugang-Chorten-and-coronation-throne-Chorten.jpg",
  },
  {
    id: 25,
    name: "Gyalshing Monastery",
    location: "Gyalshing (Geyzing)",
    description: "Regional centre for Buddhist worship.",
    established: "19th c.",
    visitors: "3,800+ annually",
    rating: 3.9,
    coordinates: { x: 32, y: 60 },
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dubdi-monastery-pelling-sikkim-tri-hero?qlt=82&ts=1727166828651",
  },
  {
    id: 26,
    name: "Darap Monastery",
    location: "Darap (near Gyalshing)",
    description: "Scenic village monastery with community ties.",
    established: "19th c.",
    visitors: "2,600+ annually",
    rating: 3.7,
    coordinates: { x: 34, y: 58 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F7vz0weHi1gKTexev_EulGhSMF9EZFqesA&s",
  },
  {
    id: 27,
    name: "Hee-Bermiok Monastery",
    location: "Hee-Bermiok",
    description: "Local gompa for village ceremonies.",
    established: "19th c.",
    visitors: "1,900+ annually",
    rating: 3.5,
    coordinates: { x: 26, y: 64 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4y426EUh2k7RDOD6Mq8noHXjr7UOKPjv2lQ&s",
  },
  {
    id: 28,
    name: "Khecheopalri (Khecheopalri Lake & Gompa)",
    location: "Near Khecheopalri (West)",
    description: "Sacred lake and nearby gompa; pilgrimage site.",
    established: "Traditional/ancient",
    visitors: "8,500+ annually",
    rating: 4.3,
    coordinates: { x: 24, y: 66 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKc0Q0vlhsCR4KYm4OvxT0vBGZfCQ6PUvGKQ&s",
  },
  {
    id: 29,
    name: "Hongri Monastery",
    location: "West Sikkim villages",
    description: "Small local monastery.",
    established: "19th c.",
    visitors: "1,400+ annually",
    rating: 3.4,
    coordinates: { x: 29, y: 56 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsSdKS2R8vnLI9D8PcBwQ_9Isc1qqUJwmSQ&s",
  },
  {
    id: 30,
    name: "Barfung Monastery",
    location: "West Sikkim",
    description: "Lesser-known regional monastery.",
    established: "19th c.",
    visitors: "1,200+ annually",
    rating: 3.3,
    coordinates: { x: 27, y: 59 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ429QXsVpAWBSfIf22OPPEZi-7QuKPYbdA&s",
  },
  {
    id: 31,
    name: "Sanga Choeling Monastery",
    location: "West Sikkim",
    description: "Ancient meditation center and pilgrimage stop.",
    established: "17th c.",
    visitors: "6,800+ annually",
    rating: 4.2,
    coordinates: { x: 26, y: 57 },
    image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/sanacholeing-monastery-bnnr.jpg",
  },
  {
    id: 32,
    name: "Tarkeghyang Monastery",
    location: "West Sikkim",
    description: "Small monastery associated with local lineage.",
    established: "18th–19th c.",
    visitors: "2,100+ annually",
    rating: 3.6,
    coordinates: { x: 31, y: 61 },
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 33,
    name: "Lachen Monastery",
    location: "Lachen",
    description: "Monastery serving Lachen valley; base for valley rituals.",
    established: "19th-20th c.",
    visitors: "4,200+ annually",
    rating: 4.0,
    coordinates: { x: 60, y: 15 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CzJmZacWwt4XspBTNAxDfTU",
  },
  {
    id: 34,
    name: "Lachung Monastery",
    location: "Lachung",
    description: "Key gompa for Lachung village; hosts community rituals.",
    established: "19th-20th c.",
    visitors: "3,900+ annually",
    rating: 3.9,
    coordinates: { x: 65, y: 12 },
    image: "https://www.shutterstock.com/image-photo/lachung-monastery-located-on-river-260nw-2296",
  },
  {
    id: 35,
    name: "Tholung Monastery",
    location: "Dzongu / North Sikkim",
    description: "Very sacred monastery with preserved relics and restricted access.",
    established: "18th c.",
    visitors: "1,800+ annually",
    rating: 4.4,
    coordinates: { x: 52, y: 18 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6bfkTPljO8py4pGKuI9LWM9cm",
  },
  {
    id: 36,
    name: "Tingchim Monastery",
    location: "North Sikkim",
    description: "Local monastery serving villages.",
    established: "19th c.",
    visitors: "2,300+ annually",
    rating: 3.7,
    coordinates: { x: 48, y: 22 },
    image: "https://www.northsikkimtourism.com/wp-content/gallery/tingchim-north-sikkim/tingchim",
  },
  {
    id: 37,
    name: "Ringhim Monastery",
    location: "North Sikkim",
    description: "Hilltop gompa with views and small monk population.",
    established: "19th c.",
    visitors: "1,600+ annually",
    rating: 3.5,
    coordinates: { x: 46, y: 24 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrtXqBVm7XZCgavCpwHln0DN8oO",
  },
  {
    id: 38,
    name: "Mangue Monastery",
    location: "North Sikkim",
    description: "Local community monastery.",
    established: "19th c.",
    visitors: "1,300+ annually",
    rating: 3.4,
    coordinates: { x: 44, y: 26 },
    image: "http://t2.gstatic.com/images?q=tbn:ANd9GcS2tINGn6uw8uRfoNbQ9q6vjI7UEXethgoktoSFX",
  },
  {
    id: 39,
    name: "Chungthang Monastery",
    location: "Chungthang",
    description: "Important gompa near confluence of rivers; historical importance.",
    established: "18th-19th c.",
    visitors: "5,500+ annually",
    rating: 4.1,
    coordinates: { x: 58, y: 16 },
    image: "https://www.thetourindia.com/flashphotos/photos/8b230abcafe506769b8dcf1aad1d2eb1.webp",
  },
  {
    id: 40,
    name: "Goecha Monastery",
    location: "Near Goecha La",
    description: "Pilgrim base for Goecha La trekking area; small gompa.",
    established: "20th c.",
    visitors: "2,800+ annually",
    rating: 3.8,
    coordinates: { x: 40, y: 30 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV6VZU7dmG80igq1hOnn00U8FNV",
  },
  {
    id: 41,
    name: "Ringpa Monastery",
    location: "North Sikkim",
    description: "Local hilltop gompa.",
    established: "19th c.",
    visitors: "1,700+ annually",
    rating: 3.5,
    coordinates: { x: 42, y: 28 },
    image: "https://1001things.org/wp-content/uploads/2019/02/Lingdum-6-1200x797.jpg",
  },
  {
    id: 42,
    name: "Zongri Monastery",
    location: "North Sikkim (trekking routes)",
    description: "Small gompa used by trekkers and shepherd communities.",
    established: "20th c.",
    visitors: "1,100+ annually",
    rating: 3.3,
    coordinates: { x: 38, y: 32 },
    image: "https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl79173Bi",
  },
  {
    id: 43,
    name: "Ringdom Monastery",
    location: "North Sikkim",
    description: "Rural monastery with local festivals.",
    established: "19th c.",
    visitors: "1,500+ annually",
    rating: 3.4,
    coordinates: { x: 36, y: 34 },
    image: "https://www.shutterstock.com/image-photo/rangdum-ringdom-buddhist-monastery-suru-2",
  },
  {
    id: 44,
    name: "Namchi Monastery (Samdruptse complex)",
    location: "Namchi",
    description: "Large modern complex featuring giant Buddha statue and temples.",
    established: "20th c.",
    visitors: "25,000+ annually",
    rating: 4.6,
    coordinates: { x: 50, y: 78 },
    image: "https://indroyc.com/wp-content/uploads/2014/06/samdruptse-monastery.jpg",
  },
  {
    id: 45,
    name: "Samdruptse Monastery",
    location: "Namchi",
    description: "Part of Samdruptse cultural complex, large modern shrine.",
    established: "Late 20th–21st c.",
    visitors: "22,000+ annually",
    rating: 4.5,
    coordinates: { x: 52, y: 80 },
    image: "https://www.shutterstock.com/image-photo/samdruptse-monastery-sikkim-india-future-260nw-1163467876.jpg",
  },
  {
    id: 46,
    name: "Ralang Monastery (Historic)",
    location: "Ralang (South)",
    description: "Historic gompa with vibrant rituals; also Ralong Palchen Choling nearby.",
    established: "18th-19th c.",
    visitors: "18,000+ annually",
    rating: 4.4,
    coordinates: { x: 47, y: 73 },
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 47,
    name: "Ravangla Monastery",
    location: "Ravangla/Kewzing",
    description: "Modern monastery near Ravangla; tourist & pilgrimage focus.",
    established: "1960s-modern",
    visitors: "15,000+ annually",
    rating: 4.2,
    coordinates: { x: 49, y: 76 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlETZOvi7DkdqlHUYnBw6DW4dn5Up2qS56g&s",
  },
  {
    id: 48,
    name: "Tendong Monastery",
    location: "Tendong hill area",
    description: "Hill monastery associated with Tendong rock & local legends.",
    established: "Traditional",
    visitors: "6,200+ annually",
    rating: 4.0,
    coordinates: { x: 54, y: 82 },
    image: "https://www.thetourindia.com/flashphotos/photos/8b230abcafe506769b8dcf1aad1d2eb1.webp",
  },
  {
    id: 49,
    name: "Kitam Monastery",
    location: "South Sikkim (Kitam)",
    description: "Village monastery, community center.",
    established: "19th c.",
    visitors: "2,400+ annually",
    rating: 3.6,
    coordinates: { x: 56, y: 84 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzE8omeaLkM9kQLhCw5hs9u64urJ663KHw&s",
  },
  {
    id: 50,
    name: "Tarey Bhir Monastery",
    location: "South Sikkim cliffs/area",
    description: "Small cliff-side gompa.",
    established: "19th c.",
    visitors: "1,800+ annually",
    rating: 3.5,
    coordinates: { x: 58, y: 86 },
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/88/f1/68/tarey-bhir-cliff-sadam.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 51,
    name: "Kewzing Monastery",
    location: "Kewzing area",
    description: "Local monastery for Kewzing village.",
    established: "20th c.",
    visitors: "2,100+ annually",
    rating: 3.6,
    coordinates: { x: 51, y: 74 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYZVcF-SQUQd1ppTTfMmiO1jpb2uzhQe1rBA&s",
  },
  {
    id: 52,
    name: "Bon Monastery (Kewzing area)",
    location: "Kewzing (Bon tradition)",
    description: "One of the few Bon sites in Sikkim region.",
    established: "Traditional",
    visitors: "1,600+ annually",
    rating: 3.7,
    coordinates: { x: 53, y: 72 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlHFQeBJzNLj97G7DYfn5xuqz6HMnCG82_w&s",
  },
  {
    id: 53,
    name: "Yangang Monastery",
    location: "Yangang",
    description: "Local gompa for community rituals.",
    established: "19th c.",
    visitors: "1,900+ annually",
    rating: 3.5,
    coordinates: { x: 60, y: 88 },
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=400&h=300&s=1",
  },
  {
    id: 54,
    name: "Sumbuk Monastery",
    location: "Sumbuk",
    description: "Village monastery.",
    established: "19th c.",
    visitors: "1,400+ annually",
    rating: 3.4,
    coordinates: { x: 62, y: 90 },
    image:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcS2tINGn6uw8uRfoNbQ9q6vjI7UEXethgoktoSFXRUmxwtkPpiGZ1S1jQkjLezSwzYRPqJs_8l",
  },
]

export function InteractiveMap() {
  const [selectedMonastery, setSelectedMonastery] = useState<Monastery | null>(null)
  const [hoveredMonastery, setHoveredMonastery] = useState<number | null>(null)

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Sacred Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the spiritual landmarks of Sikkim through our interactive map. Click on any monastery to learn
            about its history and significance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Sikkim Monastery Map
                </CardTitle>
                <CardDescription>
                  Interactive map showing all 54 monastery locations across Sikkim
                  <Badge variant="secondary" className="ml-2">
                    54 Sacred Sites
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                  {/* Placeholder map background */}
                  <div className="absolute inset-0 opacity-20">
                    <img src="/sikkim-map-outline.jpg" alt="Sikkim Map" className="w-full h-full object-cover" />
                  </div>

                  {/* Monastery markers */}
                  {monasteries.map((monastery) => (
                    <button
                      key={monastery.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                        hoveredMonastery === monastery.id || selectedMonastery?.id === monastery.id
                          ? "scale-125 z-10"
                          : "scale-100"
                      }`}
                      style={{
                        left: `${monastery.coordinates.x}%`,
                        top: `${monastery.coordinates.y}%`,
                      }}
                      onClick={() => setSelectedMonastery(monastery)}
                      onMouseEnter={() => setHoveredMonastery(monastery.id)}
                      onMouseLeave={() => setHoveredMonastery(null)}
                    >
                      <div
                        className={`w-3 h-3 rounded-full border-2 border-white shadow-lg ${
                          selectedMonastery?.id === monastery.id ? "bg-primary" : "bg-red-500"
                        }`}
                      />
                      {(hoveredMonastery === monastery.id || selectedMonastery?.id === monastery.id) && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap">
                          {monastery.name}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monastery Details */}
          <div className="space-y-6">
            {selectedMonastery ? (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{selectedMonastery.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {selectedMonastery.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{selectedMonastery.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={selectedMonastery.image || "/placeholder.svg"}
                    alt={selectedMonastery.name}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?key=peqg4"
                    }}
                  />
                  <p className="text-sm text-muted-foreground">{selectedMonastery.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Est. {selectedMonastery.established}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedMonastery.visitors}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Virtual Tour
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Select a Monastery</CardTitle>
                  <CardDescription>Click on any marker on the map to learn more about that monastery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {monasteries.slice(0, 20).map((monastery) => (
                      <button
                        key={monastery.id}
                        onClick={() => setSelectedMonastery(monastery)}
                        className="w-full text-left p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                      >
                        <div className="font-medium text-sm">{monastery.name}</div>
                        <div className="text-xs text-muted-foreground">{monastery.location}</div>
                      </button>
                    ))}
                    <div className="text-xs text-muted-foreground text-center pt-2">
                      ... and {monasteries.length - 20} more monasteries
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
