<template>
  <div class="d-flex flex-column align-content-center">
    <div class=" pt-2 d-flex flex-column align-items-center justify-content-center">
      <h2>Plantastico</h2>
      <p>Manage your basic plant care needs with simple reminders.</p>
    </div>

    <div class=" pt-2 d-flex align-items-center justify-content-center">
      <b-img src="plantastico-logo.png" fluid style="max-height:250px" />
    </div>

    <div class=" pt-4 d-flex align-items-center justify-content-center">
      <b-card>
        <div class=" pt-2 d-flex flex-column align-items-center justify-content-center">
          <h4>Privacy Policy</h4>
          <p>The Plantastico iOS App does not collect any data. All recorded data is stored on the user's device and can be deleted with the app at any time.</p>
        </div>
      </b-card>
    </div>

    <div class=" pt-2 d-flex align-items-center justify-content-center">
      <b-button href="mailto:davidwallacesadler@gmail.com" pill class="folio-button">
        <img class="folio-button-icon" src="contact.svg" alt="Icon of a person waving.">
        Email Support
      </b-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      profileImgProps: { width: 250, height: 250, fluid: true }
    }
  }
}
</script>

  <style lang="scss">
  @import '@/assets/styles/main.scss';
  </style>
