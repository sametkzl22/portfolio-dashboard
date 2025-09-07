<template>
  <section class="space-y-6 max-w-lg">
    <h2 class="text-3xl font-bold text-gray-800">Contact</h2>
    <p class="text-gray-600">Fill in the form below and I’ll get back to you as soon as possible.</p>

    <form @submit.prevent="sendMail" class="space-y-4">
      <input v-model="name" type="text" placeholder="Your Name" required class="w-full border p-2 rounded"/>
      <input v-model="email" type="email" placeholder="Your Email" required class="w-full border p-2 rounded"/>
      <textarea v-model="message" placeholder="Your Message" required class="w-full border p-2 rounded"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>

    <p v-if="status" class="text-sm" :class="ok ? 'text-green-600' : 'text-red-600'">{{ status }}</p>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')
const ok = ref(false)

const sendMail = async () => {
  status.value = 'Sending...'
  ok.value = false
  try {
    const res = await emailjs.send(
      'service_0g1953y',   //  service id
      'template_3goewng',      //  template id’ni yaz
      {
        // ⬇️ şablondaki alan adlarıyla birebir aynı
        name: name.value,
        email: email.value,       // Reply To için {{email}} kullanıyoruz
        message: message.value,
        title: 'Portfolio Contact' // Subject’te {{title}} var diye ekledik
      },
      'qTOg1oKJv7JC6UriA'  //  public key
    )
    ok.value = true
    status.value = 'Message sent ✅'
    name.value = ''
    email.value = ''
    message.value = ''
    console.log('EmailJS response:', res)
  } catch (err) {
    console.error('EmailJS error:', err)
    status.value = `Error sending ❌ ${err?.text || err?.message || ''}`
  }
}
</script>
