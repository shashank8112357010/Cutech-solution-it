/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: "#F4F4F4",
        darkBlue: "#091242",
        lightBlack: "#23212A",
        textBlack: "#1C1F35",
        textgray: "#666C89",
        darkYellow: "#FFBE34",
        darkestBlue: " #091242"
      },

      fontSize: {
        lapHeaderText: "45px",
        tabHeaderText: "35px",  //new
        mobHeaderText: "24px",
        lapHeaderBody: "16px",
        tabHeaderBody: "16px",  //new
        mobHeaderBody: "12px",
        lapHeading1: "25px",
        tabHeading1: "25px",   //new
        mobHeading1: "14px",
        lapBody: "16px",
        tabBody: "16px",   //new
        mobBody: "12px",
        lapTitle: "35px",
        tabTitle: "25px",     //new 
        mobTitle: "20px",
        lapTitle2: "20px",
        tabTitle2: "18px",    //new    
        mobTitle2: "16px",
        lapBody2: "14px",
        tabBody2: "14px",    //new 
        mobBody2: "12px",
        lapBody3: "16px",
        tabBody3: "12px",     //new 
        mobBody3: "10px",
        lapTitle3: "18px",
        tabTitle3: "18px",    //new 
        mobTitle3: "14px",
        lapContactTitle: "26px",
        mobContactTitle: "16px",
        lapContactBody: "12px",
        mobContactBody: "12px",
        lapBlogTitle: "25px",
        tabBlogTitle: "18px",    //new 
        mobBlogTitle: "16px",
        lapBlogBody: "16px",
        lapBlogPoints: "16px",
        lapFooterTitle: "20px",
        mobFooterTitle: "18px",
        lapFooterLinks: "12px",
        tabFooterLinks: "12px",    //new 
        mobFooterLinks: "12px",
        lapFooterBody: "12px",
        lapBlogPoints: "16px",
        tabBlogPoints: "14px",
        mobBlogPoints: "12px",
        lapBlogBody: "16px",
        tabBlogBody: "14px",
        mobBlogBody: "14px",
      },
      screens: {
        sm: "640px",    //tablet
        mmd: "1100px",
        lg: "1280px",    //laptop
        xxl: "1440px"
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        krub: ['Krub', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}


