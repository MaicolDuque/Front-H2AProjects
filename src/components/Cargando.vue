

<template>
    <div style="position: absolute;top: 40%;left: 40%;">    
        <img src="/src/assets/img/loading.gif" alt="" style="width: 30%">
    </div>
</template>

<script>
    import Config from "../services/config"    
    export default {
        name: 'Cargando',
        data(){
            return {
                ruta: Config.url
            }
        }
    }
</script>