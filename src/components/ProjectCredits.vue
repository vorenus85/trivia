<template>
  <footer class="project-credits card p-3">
    <span> © 2024 Perge János </span>

    <div class="links">
      <a
        :href="githubRepoUrl"
        target="_blank"
        rel="noopener"
        aria-label="View source code on GitHub"
      >
        <GithubIcon />
      </a>

      <a :href="linkedinUrl" target="_blank" rel="noopener" aria-label="View Linkedin profile">
        <LinkedinIcon />
      </a>
    </div>
  </footer>
</template>

<script setup>
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'

const linkedinUrl = 'https://hu.linkedin.com/in/janos-perge-508514142'
const githubRepoUrl = 'https://github.com/vorenus85/trivia'
</script>

<style scoped>
.project-credits {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #6b7280;
}

.links {
  display: flex;
  gap: 0.5rem;
}

.links a {
  color: inherit;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #111827;
}
</style>
