import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';


export const animatePageIn = () => {
    const bannerOne  = document.getElementById("banner-1")
    const bannerTwo  = document.getElementById("banner-2")
    const bannerThree  = document.getElementById("banner-3")
    const bannerFour= document.getElementById("banner-4")
  
 
    if(bannerOne && bannerTwo && bannerThree && bannerFour){
        const tl = gsap.timeline();
      
       
       
        tl.set([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent :0
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent : 100,
            stagger : 0.2,
            ease : "sine.inOut",
            duration:1
            
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            display:"none",
            opacity:0,
        })
    }

}

export const animateLogoIn = () => {
    const logo = document.getElementById("logo")
    const logo2=  document.getElementById('logo2')
  
    const tl = gsap.timeline();
    tl.set(logo, {
        scale: 0,
        opacity: 0,
        display:"block",
    }).to(logo, {
        scale: 1,
        opacity: 1,
        ease: "back.out(1.7)",
        duration: 0.3,
    }).to(logo, {
        opacity:0,
        display:"none",
    })
    logo2?.classList.remove('hidden');
    logo2?.classList.add('logo-container');
}

export const animatePageOut = (href:string,router: AppRouterInstance | String[]) => {
    const bannerOne  = document.getElementById("banner-1")
    const bannerTwo  = document.getElementById("banner-2")
    const bannerThree  = document.getElementById("banner-3")
    const bannerFour= document.getElementById("banner-4")

    if(bannerOne && bannerTwo && bannerThree && bannerFour){
        const tl = gsap.timeline({
        });
        
        tl.set([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent :-100
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent : 0,
            stagger : 0.2,
            ease : "sine.inOut",
            onComplete: () => {
                router.push(href)
            }
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            display:"none",
            opacity:0,
        })
    }
}