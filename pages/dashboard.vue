<template>
     <div class="bg-center bg-cover bg-no-repeat h-screen" style="background-image: url('/img/sea.png')">
    <div>
        <ProfileCard :FirstName="FirstName" :LastName='LastName'
        :Birth="Birth" 
        :Institute="Institute" 
        :Faculty="Faculty"
        :DateStartIntern="DateStartIntern" 
        :DateEndIntern="DateEndIntern" 
        :Telephone="Telephone" 
        :Email="Email" />
    </div>
</div>
</template>
<script>
import ProfileCard from '/components/ProfileCard.vue'

export default {
    components: { ProfileCard },
    data() {
        return {
            FirstName: 'Abdul',
            LastName:'Dulab',
            Birth: '21/06/2002',
            Institute: 'SOUTSAKA',
            Faculty:'PROGRAM',
            DateStartIntern:'11/07/2023',
            DateEndIntern:'11/08/2023',
            Telephone:'+8562093992093',
            Email:'Jochanthoumnivong@gmail.com'
        }
    }
}
</script>