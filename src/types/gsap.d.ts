declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any;
  export { ScrollTrigger };
}

declare module 'gsap/MotionPathPlugin' {
  const MotionPathPlugin: any;
  export { MotionPathPlugin };
}

declare module 'gsap' {
  const gsap: any;
  
  interface GSAPStatic {
    to: (target: any, vars: any) => any;
    from: (target: any, vars: any) => any;
    fromTo: (target: any, fromVars: any, toVars: any) => any;
    set: (target: any, vars: any) => any;
    timeline: (vars?: any) => any;
    registerPlugin: (...args: any[]) => void;
    config: (config: any) => void;
  }

  interface ScrollTriggerInstance {
    progress: number;
    trigger: Element;
    start: string;
    end: string;
    scrub: boolean | number;
    onUpdate: (self: ScrollTriggerInstance) => void;
  }

  export { GSAPStatic, ScrollTriggerInstance };
  export default gsap;
} 