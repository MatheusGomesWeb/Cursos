# Slide

Anime a entrada de elementos utilizando a propriedade animation

```
Slide.module.css

.container {
  overflow: hidden;
}

.content {
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
}

.item {
  flex-shrink: 0;
  width: 80%;
  margin: 0 10%;
  border-radius: 4px;
  background-color: #eee;
  text-align: center;
  padding: 10rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1rem auto;
}
```

```
Slide.js

import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
     /*   style={{ transform: translateX(`${position}px`) }} */
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
```

```
App.js

import React from 'react';
import './App.css';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
```
