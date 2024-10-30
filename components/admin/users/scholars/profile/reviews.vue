<template>
  <div class="space-y-6 text-foreground">
    <h3 class="text-lg font-semibold text-center">Reviews</h3>
    <div class="flex items-center gap-4">
      <ui-button v-for="rating in ratings" :key="rating.value"
        :variant="activeRating === rating.value ? 'default' : 'secondary'" class="px-3 h-7 gap-2 text-yellow-500"
        @click="activeRating = rating.value">
        <Star :size="14" class="fill-yellow-500" />
        <span :class="activeRating === rating.value ? 'text-primary-foreground' : 'text-foreground'">{{ rating.label
          }}</span>
      </ui-button>
    </div>
    <div v-for="(review, i) in filteredRatings" :key="i" class="flex gap-3">
      <ui-avatar>
        <ui-avatar-image v-if="review.picture_url" :src="review.picture_url" :alt="`${review.name} profile picture`" />
        <ui-avatar-fallback>
          {{ getInitials(review.name) }}
        </ui-avatar-fallback>
      </ui-avatar>
      <div class="flex-1 space-y-2">
        <h5 class="text-lg font-mediun truncate">{{ review.name }}</h5>
        <span class="flex items-center gap-2 text-yellow-500">
          <Star v-for="(_, i) in review.rating" :key="i" :size="14" class="fill-yellow-500" />
          <template v-if="5 - review.rating > 0">
            <Star v-for="(_, i) in 5 - review.rating" :key="i" :size="14" />
          </template>
        </span>
        <p class="text-sm">{{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn, getInitials } from '~/lib/utils';
import { Star } from 'lucide-vue-next'
import { string } from 'yup';

const activeRating = ref('all')

const filteredRatings = computed(() => {
  if (activeRating.value === 'all') return reviews
  return reviews.filter((review) => activeRating.value === String(review.rating))
})

const ratings = [
  { label: 'All', value: 'all' },
  { label: '5 Stars', value: '5' },
  { label: '4 Stars', value: '4' },
  { label: '3 Stars', value: '3' },
  { label: '2 Stars', value: '2' },
  { label: '1 Star', value: '1' },
]
const reviews = [
  {
    picture_url: '',
    name: 'Jerry Seinfeld',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet consectetur. Mauris ac eu eu feugiat parturient nisi egestas gravida. Risus scelerisque amet elementum vel ipsum faucibus pretium ante. Eleifend aliquet est posuere dui nibh cum. Vestibulum egestas posuere duis mi platea egestas suspendisse.'
  },
  {
    picture_url: '',
    name: 'Jerry Seinfeld',
    rating: 4,
    comment: 'Lorem ipsum dolor sit amet consectetur. Mauris ac eu eu feugiat parturient nisi egestas gravida. Risus scelerisque amet elementum vel ipsum faucibus pretium ante. Eleifend aliquet est posuere dui nibh cum. Vestibulum egestas posuere duis mi platea egestas suspendisse.'
  },
  {
    picture_url: '',
    name: 'Jerry Seinfeld',
    rating: 3,
    comment: 'Lorem ipsum dolor sit amet consectetur. Mauris ac eu eu feugiat parturient nisi egestas gravida. Risus scelerisque amet elementum vel ipsum faucibus pretium ante. Eleifend aliquet est posuere dui nibh cum. Vestibulum egestas posuere duis mi platea egestas suspendisse.'
  },
  {
    picture_url: '',
    name: 'Jerry Seinfeld',
    rating: 2,
    comment: 'Lorem ipsum dolor sit amet consectetur. Mauris ac eu eu feugiat parturient nisi egestas gravida. Risus scelerisque amet elementum vel ipsum faucibus pretium ante. Eleifend aliquet est posuere dui nibh cum. Vestibulum egestas posuere duis mi platea egestas suspendisse.'
  },
  {
    picture_url: '',
    name: 'Jerry Seinfeld',
    rating: 1,
    comment: 'Lorem ipsum dolor sit amet consectetur. Mauris ac eu eu feugiat parturient nisi egestas gravida. Risus scelerisque amet elementum vel ipsum faucibus pretium ante. Eleifend aliquet est posuere dui nibh cum. Vestibulum egestas posuere duis mi platea egestas suspendisse.'
  }
]
</script>
