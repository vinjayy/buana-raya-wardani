"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "@/app/actions/email"
import { Send } from "lucide-react"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { toast } = useToast()

  return (
    <section id="contact" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              We would love to hear from you. Whether you are planning a small garden, a commercial project, or need
              reliable plant supply, our team is ready to assist.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <MapPin className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-green-800">Address</h3>
                <p className="text-gray-700">
                  PT Buana Raya Wardani
                  <br />
                  Jl. Manisrenggo Km 3, Kebondalem Lor, Prambanan, Klaten, Central Java – Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Phone className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-green-800">Phone</h3>
                <p className="text-gray-700">+62 856-4304-2043</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Mail className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-green-800">Email</h3>
                <p className="text-gray-700">sales@buanarayawardani.com</p>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2633448783513!2d110.49!3d-7.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMDAuMCJTIDExMMKwMjknMjQuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-4">Send Us a Message</h3>
              <form action={sendEmail} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800"
                    >
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800"
                    >
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800"
                  >
                    Phone
                  </label>
                  <Input id="phone" name="phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800"
                  >
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Subject of your message" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800"
                  >
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Your message" className="min-h-[120px]" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
