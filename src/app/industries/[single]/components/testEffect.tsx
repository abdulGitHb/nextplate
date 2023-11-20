'use client';
import styles from '../../page.module.css'
import { useRef, useEffect, FC, ReactElement } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


const TextEffectPage = ({content}:{content:string}) => {

  let refs = useRef<HTMLElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = (): void => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (content: string): ReactElement[] => {
    let body: ReactElement[] = [];
    content.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word: string): ReactElement[] => {
    let letters: ReactElement[] = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => { if (el) refs.current.push(el) }}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {
          splitWords(content)
        }
      </div>
    </main>
  )
}

export default TextEffectPage;
