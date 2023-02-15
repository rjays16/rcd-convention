<template>
  <section id="organizing-commitee">
    <div class="banner">
      <div class="container">
        <div class="text">
          <h2 class="font-weight-bold">Meet the
            <br><p class="text-uppercase mb-0">Organizing Committee</p>
          </h2>
        </div>
      </div>
    </div>

    <div class="container py-3">
      <img class="img-fluid w-100" src="/assets/images/orgcom-group-photo.jpg" />
    </div>

    <div class="container committees py-5">
      <div class="row">
        <div class="col-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-overall" aria-expanded="false" aria-controls="collapse-overall" @click="collapse">
                <h5 v-if="!collapsed" class="text-uppercase mb-0 header dmsans-regular fw-bold">RCD Executive Committee</h5>
                <h3 v-else class="text-uppercase mb-0 header dmsans-regular fw-bold">RCD Executive Committee</h3>
              </button>
            </h2>
            <div id="collapse-overall" class="accordion-collapse collapse">
              <div class="accordion-body p-0 text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row justify-content-md-center">
                    <div class="col col-lg-4">
                      <div class="mt-5">
                        <h5 class="text-uppercase mb-0 header dmsans-italic fw-bold">Overall Chair</h5>
                        <p class="dmsans-regular">Ma. Teresita G. Gabriel, MD</p>
                      </div>
                      <div class="mb-2">
                        <h5 class="text-uppercase mb-0 header dmsans-italic fw-bold">Secretary General/Treasurer</h5>
                        <p class="dmsans-regular">Maria Angela M. Lavadia, MD</p>
                      </div>
                    </div>
                    <div class="col-lg-4 mb-5">
                      <img src="/icon-pds.png" alt="" class="col-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-advisers" aria-expanded="false" aria-controls="collapse-advisers">
                <h5 class="text-uppercase mb-0 header">RCD Advisers</h5>
              </button>
            </h2>
            <div id="collapse-advisers" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Ma. Lorna F. Frez, MD</p>
                    <p class="mb-1">Arnelfa C. Paliza, MD</p>
                    <p class="mb-1">Georgina C. Pastorfide, MD</p>
                    <p class="mb-3">Francisca D. Roa, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-scientific" aria-expanded="false" aria-controls="collapse-scientific">
                <h5 class="text-uppercase mb-0 header">Scientific</h5>
              </button>
            </h2>
            <div id="collapse-scientific" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-2">Maria Juliet E. Macarayo, MD - Chair</p>
                    <p class="mb-2">Noemie Salta Ramos, MD</p>
                    <p class="mb-2">Cecilia Roxas Rosete, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-ways" aria-expanded="false" aria-controls="collapse-ways">
                <h5 class="text-uppercase mb-0 header">Ways and Means</h5>
              </button>
            </h2>
            <div id="collapse-ways" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Ma. Veronica J. Estrella, MD - Chair</p>
                    <p class="mb-1">Adviser: Georgina C. Pastorfide, MD</p>
                    <p class="mb-1">Maria Franchesca S. Quinio, MD</p>
                    <p class="mb-3">Ana Aurelia M. Santos, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-registration" aria-expanded="false" aria-controls="collapse-registration">
                <h5 class="text-uppercase mb-0 header">Registration</h5>
              </button>
            </h2>
            <div id="collapse-registration" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Zharlah Gulmatico-Flores, MD - Chair</p>
                    <p class="mb-1">Marisel P. Abejo, MD - Co-Chair</p>
                    <p class="mb-1">Janelle G. Go, MD</p>
                    <p class="mb-3">Riza R. Milante, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-physical" aria-expanded="false" aria-controls="collapse-physical">
                <h5 class="text-uppercase mb-0 header">Physical Arrangements</h5>
              </button>
            </h2>
            <div id="collapse-physical" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Cybill Dianne C. Uy, MD - Chair</p>
                    <p class="mb-1">Blossom Tian Chan, MD - Co-Chair</p>
                    <p class="mb-1">Cindy Jao Tan, MD</p>
                    <p class="mb-1">Rona Maria R. Abad-Constantino, MD</p>
                    <p class="mb-1">Jolene Kristine G. Gatmaitan-Dumlao, MD</p>
                    <p class="mb-3">Juanita Carmela Co Buenviaje, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-documentation" aria-expanded="false" aria-controls="collapse-documentation">
                <h5 class="text-uppercase mb-0 header">Documentation</h5>
              </button>
            </h2>
            <div id="collapse-documentation" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Carolina A. Carpio, MD - Chair</p>
                    <p class="mb-1">Julie W. Pabico, MD - Co-Chair</p>
                    <p class="mb-1">Simeon R. Veluz Jr. , MD</p>
                    <p class="mb-3">Karen Abigail B. Santos, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-publicity" aria-expanded="false" aria-controls="collapse-publicity">
                <h5 class="text-uppercase mb-0 header">Publicity</h5>
              </button>
            </h2>
            <div id="collapse-publicity" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Christene Pearl - Fernandez-Arandia, MD - Chair</p>
                    <p class="mb-3">Terese Monette Aquino- Agas, MD - Co-Chair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-awards" aria-expanded="false" aria-controls="collapse-awards">
                <h5 class="text-uppercase mb-0 header">Awards and Certificates</h5>
              </button>
            </h2>
            <div id="collapse-awards" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Mary Charmaine G. Castillo, MD - Chair</p>
                    <p class="mb-1">Michelle Deborah Marie V. Sison, MD - Co-Chair</p>
                    <p class="mb-3">Ma. Theresa A. Carmona, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-socials" aria-expanded="false" aria-controls="collapse-socials">
                <h5 class="text-uppercase mb-0 header">Socials</h5>
              </button>
            </h2>
            <div id="collapse-socials" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Claudine Rae Lagman-Javier, MD - Chair</p>
                    <p class="mb-1">Contessa Louise Hamada-Ostrea, MD - Co- Chair </p>
                    <p class="mb-1">Sharon O. Lim, MD</p>
                    <p class="mb-1">Sherwin A. Llego, MD</p>
                    <p class="mb-3">Winlove P. Mojica, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 mb-3">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-research" aria-expanded="false" aria-controls="collapse-research">
                <h5 class="text-uppercase mb-0 header">Research</h5>
              </button>
            </h2>
            <div id="collapse-research" class="accordion-collapse collapse">
              <div class="accordion-body p-0 d-inline-block text-start corner-circle dmsans-regular">
                <div class="container">
                  <div class="row">
                    <p class="mb-1">Camille Berenguer-Angeles, MD - Chair</p>
                    <p class="mb-1">Hester Gail Y. Lim-Bueser, MD - Co-Chair</p>
                    <p class="mb-1">Bryan K. Guevara, MD</p>
                    <p class="mb-3">Mara Therese Evangelista-Huber, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods:{
    collapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-outline-info {
  background-color: #fff !important;
}

#organizing-commitee {
  padding: 0;
  margin: 0;
  .banner {
    width: 100%;
    background-color: #F7F7F7;
    .container {
      background-image: url('~/static/assets/comm-lines-web.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      .text {
        padding: 7% 0 10% 12%;
        h2 {
          letter-spacing: 10px;
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'Avenir-Regular';
        }
        span {
          letter-spacing: 10px;
        }
      }
      .lines {
        &-upper {
          width: 200px;
          height: 100%;
          position: absolute;
          outline: 4px;
          right: 30%;
          top: 0%;
          .blue {
            position: relative;
            width: 148px;
            height: 18px;
            left: 7%;
            top: 0;
            border-bottom: 4px solid #005B97;
            transform: translateY(61px) translateX(10px) rotate(-35deg);
          }
          .orange {
            position: relative;
            width: 168px;
            height: 20px;
            left: 24%;
            top: 0;
            border-bottom: 2px solid #FF7500;
            transform: translateY(23px) translateX(10px) rotate(-35deg);
          }
        }
        &-lower {
          width: 200px;
          position: absolute;
          outline: 4px;
          right: 44%;
          top: 59%;
          .blue {
            position: relative;
            width: 148px;
            height: 18px;
            left: 22%;
            top: -15px;
            border-bottom: 4px solid #005B97;
            transform: translateY(61px) translateX(10px) rotate(-35deg);
          }
          .orange {
            position: relative;
            width: 168px;
            height: 20px;
            left: -4%;
            top: 15px;
            border-bottom: 2px solid #FF7500;
            transform: translateY(23px) translateX(10px) rotate(-35deg);
          }
        }
      }
    }
  }
  .committees {
    .committee {
      border: 2px solid #0776BC;
      box-shadow: 0px 6px 16px rgba(74, 58, 255, 0.19);
      .accordion-body {
        .container {
          min-height: 180px;
        }
        p:last-of-type {
          margin-bottom: 20px;
        }
      }
      .accordion-button::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        background-color: #0776BC;
        background-position: center;
        padding: 17px;
        justify-content: center;
        border-radius: 50%;
      }
      .header {
        color: #0776BC;
      }
      .accordion-button {
        box-shadow: none;
      }
      .col-logo{
        width: 300px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner {
      .container {
        .text {
          padding: 12% 0 16% 0;
          h2 {
            text-align: left;
            font-family: 'Avenir-Regular';
            letter-spacing: 0ch;
            font-size: 2.6rem;
            padding-top: 20px;
          }
        }
        .lines {
          &-lower {
            .orange {
              width: 203px;
              height: 23px;
              left: -103%;
              top: 31px;
            }
            .blue {
              width: 219px;
              height: 18px;
              left: -73%;
              top: -10px;
            }
          }
          &-upper {
            .orange {
              height: 20px;
              left: 27%;
              width: 197px;
            }
            .blue {
              width: 185px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 280px) {
    .text{
      padding: 10% 0;
      h2, .text-uppercase{
        font-size: .7rem !important;
        text-align: center !important;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner {
      .container{
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .lines-upper{
          width: 200px;
          height: 100%;
          position: absolute;
          outline: 4px;
          right: 5%;
          top: 0%;
        }
        .text{
          padding: 10% 0;
          h2, .text-uppercase{
            letter-spacing: 5px;
            font-size: 1.2rem;
            padding-top: 0;
            text-align: center;
          }
        }
        .lines-lower{
          width: 200px;
          position: absolute;
          outline: 4px;
          left: 0%;
          top: 60%;
          .blue{
            position: relative;
            width: 148px;
            height: 18px;
            left: 22%;
            top: -15px;
            border-bottom: 4px solid #005B97;
            transform: translateY(61px) translateX(10px) rotate(-35deg);
          }
          .orange{
            position: relative;
            width: 175px;
            height: 20px;
            left: -4%;
            top: 15px;
            border-bottom: 2px solid #FF7500;
            transform: translateY(28px) translateX(1px) rotate(-35deg);
          }
        }
      }
    }
    .committees {
      .committee {
        .texts {
          padding: 0.5rem;
        }
      }
    }
    .col-logo {
      display: none;
    }
  }
}
</style>