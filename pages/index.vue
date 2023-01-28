<script setup lang="ts">
import BigBrushUrl from "~~/assets/img/brush-small.svg?url";
</script>

<template>
  <div class="wrapper">
    <div class="left-right">
      <div>
        <div class="bare-text-box">
          <h1 class="font-showcase main-title">
            <span>Obligatory</span> <span>Portfolio</span> <span>Website!</span>
          </h1>
          <h2>Hi, I'm Daniel!</h2>

          <p>
            You want bells? Whistles like many you've seen before? You're
            getting them.
          </p>
          <p>
            While you're here, why don't you check out
            <a class="highlight" href="https://eggworld.me">my real website?</a>
          </p>
        </div>
        <div class="intro-button-box">
          <button>
            <a href="#about">More about me <span class="down arrow">↓</span></a>
          </button>
          <button>
            <a href="#projects"
              >What I've made <span class="down arrow">↓</span></a
            >
          </button>
          <button>
            <a href="/blog"
              >What I have to say <span class="right arrow">→</span></a
            >
          </button>
        </div>
      </div>
      <!--<FeaturedProject :project="{ name: 'Mandown' }" />-->
    </div>
    <!--<Carousel />-->
    <!--<ScreenBrush />-->
    <img class="brushdivider" :src="BigBrushUrl" />
  </div>
  <h2 class="heading" id="about">About</h2>
  <IndexAbout />
  <h2 class="heading" id="projects">Projects</h2>
  <IndexProjects />
</template>

<style scoped lang="scss">
h2.heading {
  text-align: center;
  font-size: 3rem;
  font-family: "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
  overflow-wrap: break-word;
  font-weight: 900;
  padding-top: 5%;
  padding-bottom: 2%;
  color: black;
}
.wrapper {
  height: 100vh;
  display: flex;
  padding-top: 10%;
}
span.arrow {
  display: inline-block;
  button:hover & {
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
  &.down {
    @keyframes hover-bounce-down {
      25% {
        transform: translateY(0.25rem);
      }
      50% {
        transform: none;
      }
    }
    animation-name: hover-bounce-down;
  }

  &.right {
    @keyframes hover-bounce-right {
      25% {
        transform: translateX(0.25rem);
      }
      50% {
        transform: none;
      }
    }
    animation-name: hover-bounce-right;
  }
}
.intro-button-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3rem;
  gap: 1rem;
  & > button {
    padding: 0.3rem 0.6rem;
    font-size: 1.25rem;
    background: #ffeeee88;
    padding: 0.75rem;
    opacity: 0;
    box-shadow: 0.1rem 0.1rem 0.5rem 2px gray;
    transition: all 0.2s ease;

    &:hover {
      transform: rotate(-2deg);
      background: linear-gradient(
          104deg,
          transparent 1%,
          rgb(255, 133, 247) 4%,
          rgba(255, 133, 247, 0.5) 6%,
          rgba(255, 133, 247, 0.1) 93%,
          rgba(255, 133, 247, 0.7) 96%,
          transparent 97%
        ),
        linear-gradient(
          183deg,
          rgba(255, 133, 247, 0) 0%,
          rgba(255, 133, 247, 0.3) 7.9%,
          rgba(255, 133, 247, 0) 15%
        );

      border-radius: 0.2rem;
      text-shadow: 0 0 0 rgba(255, 133, 247, 0.7), 0.4rem -0.7rem 0.6rem #fff,
        -0.2rem -0.5rem 1.2rem rgba(255, 255, 255, 1);
    }

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        @keyframes button-slide-in-#{$i} {
          0% {
            transform: translateX(-3rem);
            opacity: 1;
          }
          90% {
            transform: translateX(1rem);
          }
          100% {
            transform: translate(0);
            opacity: 1;
          }
        }

        transition: 1s ease-in-out all transform;
        animation-name: button-slide-in-#{$i};
        animation-duration: 0.75s;
        animation-delay: $i * 0.5s + 1.5s; // wait for title to finish
        animation-fill-mode: forwards;
      }
    }
  }
}

@for $i from 1 through 3 {
  @keyframes bounce-in-#{$i} {
    0% {
      opacity: 0;
      transform: translateY(4rem);
    }

    70% {
      opacity: 1;
    }

    80% {
      transform: translateY(-1rem);
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
  h1.main-title > span:nth-child(#{$i}) {
    opacity: 0;
    transition: 1s ease all;
    animation-name: bounce-in-#{$i};
    animation-duration: 0.75s;
    animation-delay: $i * 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
  }
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  color: black;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #555;
}

p {
  font-size: 1.25rem;
  font-weight: 500;
  color: #555;
}

.left-right {
  display: flex;
  justify-content: space-between;
}

p a {
  text-decoration: underline;
  text-decoration-skip-ink: all;
  text-decoration-thickness: 0.1rem;
}

.brushdivider {
  position: absolute;
  width: 300vh;
  left: 10%;
  top: 50vh;
  max-width: none;
  z-index: -1;
  rotate: 10deg;
}

.highlight {
  transition: all 0.15s ease-out;
  background: none;
  display: inline-block;
  &:hover,
  &:focus {
    // transform: rotate(-1deg);
    background: linear-gradient(
        104deg,
        transparent 1%,
        rgb(48, 197, 255) 4%,
        rgba(48, 197, 255, 0.5) 6%,
        rgba(48, 197, 255, 0.1) 93%,
        rgba(48, 197, 255, 0.7) 96%,
        transparent 97%
      ),
      linear-gradient(
        183deg,
        rgba(48, 197, 255, 0) 0%,
        rgba(48, 197, 255, 0.3) 7.9%,
        rgba(48, 197, 255, 0) 15%
      );

    border-radius: 0.2rem;
    text-shadow: 0 0 0 rgba(48, 197, 255, 0.7), 0.4rem -0.7rem 0.6rem #fff,
      -0.2rem -0.5rem 1.2rem rgba(255, 255, 255, 1);
  }
}

.bare-text-box {
  $color: #ffffff77;
  padding: 1rem;
  background: $color;
  box-shadow: 0 0 1rem 1rem $color;
}
</style>
