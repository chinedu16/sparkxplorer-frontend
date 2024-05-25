<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-20 absolute left-0 -bottom-7 rounded-r-2xl px-20 text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
      >
        Spark Scholars
      </div>
    </div>

    <div class="mt-10">
      <div class="bg-white relative">
        <div class="">
          <div class="flex items-center px-5 justify-center">
            <div class="max-w-screen-2xl w-full mx-auto">
              <div class="flex justify-between">
                <div class="w-4/6">
                  <p class="text-xl mt-5">
                    Spark Scholars is a new free after-school practice
                    initiative targeting students within the African community
                    and beyond in the US. The program utilizes the
                    IXL(www.ixl.com) platform for engaging academic practice
                    sessions and involves active parental participation. We need
                    a user-friendly and visually appealing website that
                    facilitates easy registration, provides program details,
                    encourages community engagement, and supports donation
                    options.Spark Scholars is a new free after-school practice
                    initiative targeting students within the African community
                    and beyond in the US. The program utilizes the
                    IXL(www.ixl.com) platform for engaging academic practice
                    sessions and involves active parental participation.
                  </p>
                </div>
                <div class="w-2/6">
                  <div class="relative flex justify-end">
                    <img
                      src="@/assets/images/illustrations/launch-one.png"
                      alt=""
                      srcset=""
                      class="z-10 w-4/5 h-full relative"
                    />
                    <div
                      class="bg-green-two z-0 h-full w-4/5 rounded-lg absolute -bottom-4 -right-4"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mt-20 w-full mx-auto">
      <div class="px-10 mt-3 space-y-5">
        <h2 class="text-3xl mb-20 font-semibold text-green-two text-center">
          Key Features
        </h2>

        <div class="grid grid-cols-2 px-10 gap-20">
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/platform-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">Platform</h3>
              <p class="text-xl mt-2">
                Utilizes IXL for comprehensive, engaging practice sessions.
                Parental Involvement: Parents ensure students practice lessons
                according to platform rules and monitor their progress.
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/whatsapp-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">
                WhatsApp Community
              </h3>
              <p class="text-xl mt-2">
                A WhatsApp group will provide regular updates on assigned tasks
                and expectations. Sub-groups will be organized by grade. Monthly
                expectations will be set, and parents are encouraged to reward
                children's achievements and share evidence in the group
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/achievement-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">
                Achievement Tracking
              </h3>
              <p class="text-xl mt-2">
                1. Minimum monthly expectations will be established. <br />
                2. Students who do not meet these expectations will be dropped
                from the group. <br />
                3. At the end of each school semester, parents will update their
                children's grades via a shared link to track the impact of our
                practice efforts on their academic performance.
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/support-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">
                Support and Donations
              </h3>
              <p class="text-xl mt-2">
                Free Service with Donation Options: While the service is free,
                we welcome donations to support the initiative. Donations can be
                one-time or recurring in the name of each child.
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/community-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">Community Growth</h3>
              <p class="text-xl mt-2">
                We expect the community to grow quickly due to the effectiveness
                and supportive nature of the program.
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <div
              class="bg-green-two h-24 w-2/12 rounded-2xl flex items-center justify-center"
            >
              <img src="@/assets/images/icons/complementary-white.svg" alt="" />
            </div>
            <div class="w-8/12 text-gray-one">
              <h3 class="uppercase font-semibold text-xl">
                Complementary Services
              </h3>
              <p class="text-xl mt-2">
                1. Providing laptops to underprivileged children in Africa. <br> 2.
                IT Launchpad programs. <br> 3. Pimp My Tech Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 px-10 flex justify-center items-center">
        <div class="w-3/6 flex space-x-4">
          <button class="h-16 w-full text-white right-0 bg-green-two btn">
            <nuxt-link to="/scholars/register">Register Now</nuxt-link>
          </button>
          <button class="h-16 w-full text-white right-0 bg-black btn">
            <nuxt-link to="/scholars/donate">Donate</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
