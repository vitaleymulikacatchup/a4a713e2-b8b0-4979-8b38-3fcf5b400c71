"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Shield, Sparkles, Calendar } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="MediCare Cannabis"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083084614-tptgfam6.jpg"
          logoAlt="MediCare Cannabis Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Benefits", id: "benefits" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Premium Medical Cannabis for Your Health"
          description="Professionally sourced, lab-tested medical cannabis products designed to support your wellness journey. Licensed dispensary with expert guidance and patient-centered care."
          tag="Licensed & Compliant"
          tagIcon={Shield}
          buttons={[
            { text: "Browse Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083086073-0ktmi50i.jpg",
              imageAlt: "Medical cannabis plants in laboratory setting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083087173-oigv8289.jpg",
              imageAlt: "Professional cannabis product bottles"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083088154-3avhb5rr.jpg",
              imageAlt: "Medical research and testing equipment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083088934-bbi5fxt0.jpg",
              imageAlt: "Healthcare professional in consultation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083090157-gsbvlqso.jpg",
              imageAlt: "Natural organic cannabis plants"
            }
          ]
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Medical Excellence & Patient Care"
          description={[
            "At MediCare Cannabis, we are dedicated to providing the highest quality medical cannabis products backed by rigorous testing and clinical expertise. Our team of healthcare professionals ensures every patient receives personalized guidance and evidence-based recommendations for their specific medical needs.",
            "We are committed to operating with complete transparency, adhering to all regulatory requirements, and maintaining the highest standards of product quality and patient safety."
          ]}
          metrics={[
            { label: "Patient Satisfaction Rate", value: "98%" },
            { label: "Lab-Tested Products", value: "100%" }
          ]}
          showBorder={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Medical Products"
          description="Explore our selection of professionally sourced, lab-tested medical cannabis products tailored to support your health goals."
          tag="Premium Quality"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Full Spectrum CBD Oil",
              price: "$45.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083092101-ufcl0ne7.jpg",
              imageAlt: "Full spectrum CBD oil tincture"
            },
            {
              id: "2",
              name: "Medical Flower - Balanced Strain",
              price: "$60.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083093006-dpoy5cdv.jpg",
              imageAlt: "Medical cannabis flower strain"
            },
            {
              id: "3",
              name: "Therapeutic Capsules",
              price: "$55.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083093998-urh9b7q9.jpg",
              imageAlt: "Medical cannabis capsules"
            }
          ]
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[
            { text: "View All Products", href: "#" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Patient Success Stories"
          description="Hear from patients who have found relief and improved quality of life through our medical cannabis program."
          tag="Real Stories"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Chronic Pain Management",
              company: "Patient since 2023",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083094869-187qrrbn.jpg",
              imageAlt: "Sarah Mitchell patient testimonial"
            },
            {
              id: "2",
              name: "Dr. James Chen",
              role: "Referring Physician",
              company: "Wellness Medical Center",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083095684-7b6l2ta9.jpg",
              imageAlt: "Dr. James Chen physician endorsement"
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Sleep Disorder Support",
              company: "Patient since 2024",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083096745-9xjoc19p.jpg",
              imageAlt: "Maria Rodriguez patient testimonial"
            },
            {
              id: "4",
              name: "Michael Johnson",
              role: "Anxiety & Wellness",
              company: "Patient since 2023",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083097541-234fi7u6.jpg",
              imageAlt: "Michael Johnson patient testimonial"
            }
          ]
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Medical Cannabis FAQ"
          description="Common questions about our products, services, and how medical cannabis can support your health."
          tag="Information"
          faqs={[
            {
              id: "1",
              title: "Is medical cannabis legal and safe?",
              content: "Yes, medical cannabis is legal in states with medical cannabis programs. All our products are lab-tested for safety, potency, and contaminants to ensure the highest quality and compliance with state regulations."
            },
            {
              id: "2",
              title: "Do I need a medical card?",
              content: "Yes, a valid medical cannabis card or recommendation from a licensed physician is required. We can guide you through the application process and provide resources to help you obtain medical authorization."
            },
            {
              id: "3",
              title: "What conditions does medical cannabis help?",
              content: "Medical cannabis has been shown to support patients with chronic pain, anxiety, sleep disorders, nausea, and other conditions. Our healthcare professionals can discuss how it may benefit your specific situation."
            },
            {
              id: "4",
              title: "Are there side effects?",
              content: "Like any medication, medical cannabis may have side effects. Common ones include dry mouth and mild drowsiness. Our team discusses potential effects and helps you find the right dosage for your needs."
            },
            {
              id: "5",
              title: "How do I choose the right product?",
              content: "Our professional staff conducts personalized consultations to understand your medical needs, preferences, and health history. We recommend appropriate products and provide detailed guidance on usage."
            }
          ]
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083098371-llflcyon.jpg"
          imageAlt="Medical professional consultation"
          mediaPosition="left"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Schedule Your Medical Consultation"
          description="Connect with our healthcare professionals to discuss your medical cannabis needs and receive personalized recommendations."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Now"
          termsText="By scheduling a consultation, you agree to our privacy policy and terms of service. We respect your confidentiality."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MediCare Cannabis"
          copyrightText="© 2025 MediCare Cannabis. Licensed Medical Dispensary."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Browse Products", href: "products" },
                { label: "Product Information", href: "#" },
                { label: "Lab Results", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Locations", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Compliance", href: "#" }
              ]
            }
          ]
        />
      </div>
    </ThemeProvider>
  );
}