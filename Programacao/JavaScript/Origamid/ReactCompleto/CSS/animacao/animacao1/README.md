# Animation

Anime a entrada de elementos utilizando a propriedade animation.

```
.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
}

@keyframes animeLeft {
  to {
    opacity: initial;
    transform: initial;
  }
}
```
