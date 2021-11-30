<script setup lang="ts">
import { useFind, usePagination } from 'feathers-pinia'
import { useUsers } from '~/stores/user'

const userStore = useUsers()

const selectedClass = ref(null)
const search = ref('')

const current = ref(null)
const setCurrent = (item: typeof userStore.Model) => current.value = item

const limit = ref(5)
const skip = ref(0)

const pagination = computed({
  get: () => ({ $limit: limit.value, $skip: skip.value }),
  set: ({ $limit, $skip }) => {
    limit.value = $limit
    skip.value = $skip
  },
})
const params = computed(() => {
  const nameFilter = { name: { $regex: search.value, $options: 'igm' } }
  const classFilter = { class: selectedClass.value }

  return {
    query: {
      ...pagination.value,
      ...(selectedClass.value ? classFilter : null),
      ...nameFilter,
    },
    paginate: true,
  }
})
const { items: users, latestQuery } = useFind({ model: userStore.Model, params })
const { next, prev, canNext, canPrev, currentPage, pageCount, toPage } = usePagination(pagination, latestQuery)
</script>

<template>
  <div class="text-left">
    <div class="flex flex-row items-center space-x-1">
      <RowsPerPageSelector v-model:rows-per-page="limit" />
      <ClassSelector v-model:school-class="selectedClass" />
      <TextInput v-model:value="search" label="Search by Name" placeholder="name" />
    </div>

    <!-- User Table -->
    <table class="table table-zebra w-130 mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <UserRow v-for="user in users" :key="user.id" :user="user" :class="{ active: user === current }" @click="() => setCurrent(user)" />
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="btn-group mt-4">
      <button class="btn" :class="{'opacity-50 cursor-not-allowed': !canPrev}" @click="canPrev && prev()">
        Previous
      </button>
      <PaginationButton v-for="page in pageCount" :key="page" :page="page" :current-page="currentPage" @click="toPage(page)" />
      <button class="btn" :class="{'opacity-50 cursor-not-allowed': !canNext}" @click="canNext && next()">
        Next
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
