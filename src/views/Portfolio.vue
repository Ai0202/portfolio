<template>
  <div>
    <h2 class="title mt-l">PORTFOLIO</h2>
    <ul class="card-list">
      <li>
        <img src="../assets/portfolio/portfolio.jpg" alt="portfolio">
        <h3 class="name">PORTFLOLIO</h3>
        <P class="description">
          this website.<br>
          created by Vue.js, Sass,<br>
          and so on.
        </P>
      </li>
    </ul>
  </div>  
</template>

<style lang="scss" scoped>
  * {
    color: #707070;
  }
  .title {
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
  }
  .card-list {
    padding: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 2rem;
    li {
      width: 32rem;
      margin: 0 3% 8rem 3%; 
      text-align: center;
      padding-bottom: 1rem;
      border: 1px solid #707070;
      box-shadow: 0 6px 6px 0 #707070;
      border-radius: 6px;
      img {
        width: 100%;
      }
      .name {
        margin: 1rem 2rem;
        font-size: 3rem;
        line-height: 4rem;
        border-bottom: 2px solid #707070;
      }
      .description {
        margin: 0 2rem;
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }
</style>

