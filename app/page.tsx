import GoogleMap from "@/components/GoogleMaps";
import { HeroCarousel } from "@/components/hero-carousel";
import MailingList from "@/components/MailingList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Wine,
  Sparkles,
  Beer,
  Instagram,
  Facebook,
  ChevronDown,
  Star,
  Quote,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#990000]/80 backdrop-blur-sm text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Taste Bottle Shop Logo"
              width={200}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="hidden md:block text-red-100">
            Fine Wine. Premium Spirits. Craft Beer.
          </p>
        </div>
      </nav>

      <section className="relative">
        <HeroCarousel />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      <main className="bg-gradient-to-b from-red-50 to-white">
        <section
          id="visit"
          className="relative py-20 scroll-mt-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-white to-red-50 -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#990000] mb-4">
                Visit Our Store
              </h2>
              <div className="w-24 h-1 bg-[#990000] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Conveniently located in Dunwoody / Sandy Springs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-[#990000] flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    1155 Mount Vernon Hwy NE Suite 430, Atlanta, GA 30338
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-[#990000] flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Hours
                  </h3>
                  <div className="text-gray-600 text-sm">
                    <p className="mb-1">Mon-Sat: 10am - 10pm</p>
                    <p>Sunday: 12:30pm - 8pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-[#990000] flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:6786915854"
                    className="text-[#990000] hover:text-[#880000] font-medium text-sm transition-colors"
                  >
                    (678) 691-5854
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-[#990000] flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:drink@tastebottleshop.com"
                    className="text-[#990000] hover:text-[#880000] font-medium text-sm transition-colors break-all"
                  >
                    drink@tastebottleshop.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://goo.gl/maps/Fq3CRFzZwJ89Yh3n9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#990000] text-white rounded-full font-semibold text-lg hover:bg-[#880000] transition-all transform hover:scale-105 shadow-xl"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-red-50 to-red-100 rounded-3xl -z-10"></div>
          <div className="py-16 px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#990000] mb-4">
                Customer Reviews
              </h2>
              <p className="text-lg text-gray-700">
                Hear what our customers have to say
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-[#990000] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      CH
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Chris Hagen
                      </CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#990000] text-[#990000]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    Excellent little store with a very nice selection of rare
                    and hard to find bourbons! Very knowledgeable and welcoming
                    owners as well! Rate them an A+!!
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      RA
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Ricardo Araki
                      </CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#990000] text-[#990000]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    Friendly service and great selection, I&apos;ve visited
                    after not finding what I was looking for at the nearby Total
                    Wine, definitely would come back and support this local
                    shop.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      CH
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Casey Harrington
                      </CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#990000] text-[#990000]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    Very nice and friendly team. They helped me select the items
                    I needed and were knowledgeable about the products and
                    introduced me to some new items as well.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-16 px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our Selection
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Curated collections of premium beverages from around the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Wine className="w-12 h-12 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                  Wine & Spirits
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                  Discover the perfect bottle of wine or spirit at Taste Bottle
                  Shop, where our knowledgeable staff is ready to assist you in
                  finding the ideal beverage for any occasion, with a wide
                  selection sourced from around the world.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-12 h-12 text-amber-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                  Imported Liquor
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                  Explore Imported Liquor at Taste Bottle Shop. From renowned
                  Scotch whiskies to artisanal tequilas, our exceptional
                  selection of imported spirits offers a captivating journey of
                  flavors and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Beer className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                  Domestic Spirits
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                  Uncover Rare Domestic Gems at Taste Bottle Shop. Explore our
                  exceptional collection of hard-to-find domestic spirits,
                  celebrating the diversity and artistry of American
                  distilleries.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <MailingList />

        <section className="bg-[#990000] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Come see us!</h2>
          <p className="text-red-100 mb-6 text-lg">
            Visit our store and experience exceptional service
          </p>
          <a
            href="https://goo.gl/maps/AQBJG4D1sCRxajP49"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium bg-white text-[#990000] hover:bg-red-50 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </section>

        <GoogleMap />

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 -z-10"></div>
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#990000] mb-4">
                About Us
              </h2>
              <div className="w-24 h-1 bg-[#990000] mx-auto"></div>
              {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your premier destination for fine wines, premium spirits, and
                craft beers in Sandy Springs, Georgia
              </p> */}
            </div>

            <div className="bg-white rounded-2xl md:p-12 mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Taste Bottle Shop is a renowned liquor store located in the
                heart of Sandy Springs, Georgia. We take great pride in offering
                a wide selection of beer, wine, and spirits, including an
                impressive variety of craft beer and specialty liquors.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our primary goal is to provide our customers with the best
                selection and prices in town, accompanied by dedicated
                assistance from our knowledgeable staff to help you find the
                perfect bottle for any occasion. We offer exclusive discounts
                for weekly purchases and special events, ensuring maximum value
                from your visit.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-[#990000] mb-4">
            Follow us on social media
          </h3>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.instagram.com/tastebottleshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium border border-[#990000] bg-transparent text-[#990000] hover:bg-red-50 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/tastebottleshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium border border-[#990000] bg-transparent text-[#990000] hover:bg-red-50 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#990000] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-100">
            &copy; {new Date().getFullYear()} Taste Bottle Shop. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
