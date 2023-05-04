<template>
    <div class="progress-bar">
        <div class="bar" :style="{ width: progress + '%' }"></div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    props: {
        duration: {
            type: Number,
            default: 1000, // 1 segundo por padrão
        },
    },
    setup(props) {
        const progress = ref(0);

        const animateProgress = () => {
            let start = null;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progressPercentage = (timestamp - start) / props.duration;
                if (progressPercentage <= 1) {
                    progress.value = progressPercentage * 100;
                    window.requestAnimationFrame(step);
                } else {
                    progress.value = 100;
                }
            };
            window.requestAnimationFrame(step);
        };

        animateProgress();

        return {
            progress,
        };
    },
};
</script>
  
<style scoped>
.progress-bar {
    border: 1px solid #ccc;
    height: 20px;
    width: 80%;
    margin-bottom: 10px;
}

.bar {
    background-color: green;
    height: 100%;
    width: 0%;
    transition: width 1s;
}
</style>