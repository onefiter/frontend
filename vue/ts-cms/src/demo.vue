<template>
    <div class="home">
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    function demo(info :{ name:string, age: number}) {

    }

    demo({name:"dw", age:18})

    export default defineComponent({
        props: {},
        data() { return {} },
        methods: {},
        computed: {}
    })

</script>