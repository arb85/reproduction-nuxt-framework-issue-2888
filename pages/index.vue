<template>
  <main>
    <!-- BASE FONT declared in main.css (Noto Sans) -->
    <h1>testing text for font issue #2888</h1>
    <!-- TESTING different fonts from windi.config.ts -->
    <h2 class="font-displaylight">testing text for font issue #2888</h2>
    <h3 class="font-display">testing text for font issue #2888</h3>
    <h4 class="font-displayfat">testing text for font issue #2888</h4>
    <h5 class="font-handwrite">
      testing text for font issue #2888 [this font is wrong]
    </h5>
    <p class="mt-16">
      everything works well in dev, but with vite build some fonts have issues,
      you can see it in the console (like in the screenshot of the previous
      comment)
    </p>
  </main>
</template>
