<template>
  <section class="home">
    <div class="profile">
      <img src="../assets/profile.jpg" alt="profile">
      <h1>ATSUSHI IKEDA</h1>
      <h2 class="title">FULL STACK WEB DEVELOPER</h2>
    </div>
    <ul class="sns-links mt-l">
      <li>
        <a href="https://github.com/Ai0202">Github</a>
      </li>
      <li>
        <a href="https://web.facebook.com/atsushiikeda02">Facebook</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/atsushi-ikeda-412753170/">Linkdin</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  $textColor: #fff;

  .home {
    background: {
      image: url(../assets/background.jpg);
      repeat: no-repeat;
      position: center;
      size: cover;
    }
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $textColor;
    z-index: 0;
    &:before {
      content: '';
      background-color: rgba(0, 0, 0, .4);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 16rem;
        border-radius: 50%;
        margin-bottom: 3rem;
      }
      h1 {
        font-size: 4rem;
        font-weight: bold;
        border-bottom: .2rem solid $textColor;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        letter-spacing: .1rem;
      }
      .title {
        font-size: 3rem;
        letter-spacing: .1rem;
        text-align: center;
      }
    }
    .sns-links {
      font-size: 3rem;
      display: flex;
      justify-content: space-around;
      text-align: center;
      flex-wrap: wrap;
      li {
        padding: 2rem;
        &:hover {
          box-shadow: 0 2px 6px 0 #707070;
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
</style>
