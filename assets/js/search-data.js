// get the ninja-keys element
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{id: "admins-สรุป",
          title: 'สรุป',
          description: "",
          section: "Admins",handler: () => {
              window.location.href = "/admins/";
            },},{id: "admins-วิเคราะห์สินค้า",
          title: 'วิเคราะห์สินค้า',
          description: "",
          section: "Admins",handler: () => {
              window.location.href = "/admins/ProductAnalytics/";
            },},{id: "english-amata-production-co-ltd-thailand",
          title: 'AMATA Production Co., Ltd. (Thailand)',
          description: "Learn more about AMATA Production — our mission, values, story, and the people behind the brand. We are passionate about quality, speed, and creative customization in apparel and media printing.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-About-Us-en/";
            },},{id: "english-amata-customizable-polo-wear-and-sublimation-en",
          title: 'Amata Customizable Polo Wear And Sublimation En',
          description: "AMATA Production manufactures high-quality polo shirts and custom-printed apparel with tailored designs, vibrant colors, and comfortable fabrics. We offer complete embroidery and screen-printing services with fast production and direct factory pricing.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-Customizable-Polo-Wear-and-Sublimation-en/";
            },},{id: "english-amata-customizable-sports-wear-and-sublimation-en",
          title: 'Amata Customizable Sports Wear And Sublimation En',
          description: "AMATA Production offers high-quality custom sportswear, sublimation jerseys, team uniforms, and printed signage at factory prices with fast delivery.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-Customizable-Sports-Wear-and-Sublimation-en/";
            },},{id: "english-amata-production-co-ltd-thailand",
          title: 'AMATA Production Co., Ltd. (Thailand)',
          description: "AMATA Production specializes in the design and production of custom-printed apparel — including team shirts, sportswear, polo shirts, and corporate uniforms — along with full-service printing for banners, vinyl signs, and branded stickers. High quality, fair pricing, and fast delivery you can trust.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-HomePage-en/";
            },},{id: "english-amata-products-en",
          title: 'Amata Products En',
          description: "AMATA Production offers complete custom manufacturing and design services for sublimation sportswear, polo shirts, organization uniforms, advertising signs, campaign banners, and all types of printed media — with modern design, factory-direct pricing, fast production, and on-time delivery.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-Products-en/";
            },},{id: "english-size-guide",
          title: 'Size Guide',
          description: "AMATA Production&#39;s size chart for sportswear, printed shirts, teamwear, corporate uniforms, polo shirts, and custom-made apparel — available in short sleeves, long sleeves, and uniform styles. Includes measurement tips to help customers choose the perfect fit.",
          section: "English",handler: () => {
              window.location.href = "/english/AMATA-Size-Guide-en/";
            },},{id: "english-cutomer-reviews",
          title: 'Cutomer Reviews',
          description: "Customer impressions and testimonials for AMATA Production’s custom design and manufacturing services — including sportswear, printed apparel, organization uniforms, polo shirts, and corporate wear. High-quality printing, modern design, fast delivery, and direct-from-factory pricing.",
          section: "English",handler: () => {
              window.location.href = "/english/customer-review-en/";
            },},{id: "projects-ไซซ์เสื้อ",
          title: 'ไซซ์เสื้อ',
          description: "ตารางไซซ์เสื้อจาก AMATA Production สำหรับเสื้อกีฬา เสื้อพิมพ์ลาย เสื้อทีม เสื้อองค์กร เสื้อโปโล สั่งผลิต แขนสั้น แขนยาว และยูนิฟอร์ม เพื่อช่วยให้ลูกค้าเลือกไซซ์ที่ดีที่สุด พร้อมคำแนะนำการวัดตัวอย่างถูกต้อง",
          section: "Projects",handler: () => {
              window.location.href = "/products/amata-size-guide/";
            },},{
        id: 'social-email',
        title: 'Email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6C%65%73@%61%6D%61%74%61%70%72%6F%64%75%63%74%69%6F%6E.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-amata',
        title: 'Amata',
        section: 'Socials',
        handler: () => {
          window.open("https://pattawee-pp.com/projects/AMATAProduction/", "_blank");
        },
      },];