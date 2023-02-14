import React, { useState } from 'react';

import styles from './LiftState.module.scss'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{backgroundColor: 'gray'}}>
      <h2 className={styles.title}>Lift State</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className={styles.panel}>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow} className={styles.button}>
          Show
        </button>
      )}
    </section>
  );
}
