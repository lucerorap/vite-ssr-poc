---
name: "Hello"
---

<script setup>
    import { useRoute } from 'vue-router'
    import HelloWorld from '/src/components/HelloWorld.vue'
    const route = useRoute();
    console.log('route', route.name);
    // you can also use $route.name

    useHead({
        title: 'samplemdfile'
    })
</script>

# Sample MD File {{ frontmatter.name }}

<!-- <router-link to="/">Home</router-link> -->

<!-- <hello-world/> -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet metus sed turpis dapibus, eget tempor ligula ultricies. Praesent mauris dui, finibus vel blandit in, efficitur id lectus. Nunc semper nisi at nisi pretium pulvinar. Vivamus lobortis leo sapien, id maximus dui hendrerit non. Mauris accumsan placerat urna, ultrices convallis ex. Morbi leo sapien, facilisis non justo sit amet, tristique mollis risus. Nam vel erat mollis, tincidunt risus quis, porta nibh. Pellentesque at consectetur est. Etiam at placerat ex, ac pellentesque purus. Praesent ac est semper, efficitur augue sed, aliquam risus. Phasellus vel ultricies libero. Nullam quis massa nec diam laoreet tempor vitae sit amet risus. Ut in lorem lectus. Suspendisse congue mauris mauris, in varius enim pretium eleifend.

Phasellus fringilla egestas rhoncus. Aenean dictum, tellus at fermentum mollis, ex elit dignissim dolor, quis facilisis orci arcu et dui. Maecenas vel blandit elit. Proin pulvinar id dolor quis cursus. Mauris blandit nunc a enim tristique hendrerit. Pellentesque auctor quam hendrerit maximus egestas. Praesent quam nulla, commodo placerat efficitur vitae, pulvinar ac metus. Sed vulputate pulvinar mi vitae fermentum. Aenean vehicula nulla leo. Pellentesque commodo egestas risus ut dapibus. Donec id mauris nunc. Fusce in sollicitudin purus.

Curabitur at metus tortor. Sed sit amet nisi sed purus mattis ullamcorper. Morbi elementum, purus sed venenatis facilisis, tellus felis sollicitudin ex, quis posuere orci nisi eu velit. Vivamus ut ornare tortor, vitae blandit odio. Nulla sed facilisis turpis. Donec eu nisi convallis, malesuada nisl convallis, condimentum sem. Sed aliquet, eros eu consequat facilisis, magna lorem tristique turpis, eget consectetur tortor est nec erat. In at sem a ante finibus elementum. Proin rutrum sed magna eget porta. Quisque ullamcorper orci vel ante pellentesque condimentum. Nam at ullamcorper ligula. Nam dui felis, tincidunt id rhoncus vitae, commodo sit amet sapien. Sed scelerisque ac nisi sit amet placerat. Integer pulvinar sem nec nulla bibendum, sit amet ultrices nulla efficitur.

Suspendisse porttitor, justo quis consectetur fringilla, lectus lectus malesuada nisl, pretium maximus tellus diam et eros. Maecenas convallis vestibulum erat, eget convallis nulla suscipit eu. Phasellus et odio tellus. Maecenas rutrum turpis et eros elementum, non tristique velit condimentum. Proin vulputate eros non auctor tempus. Maecenas vulputate quam vel elementum bibendum. Donec sit amet dolor et est fermentum scelerisque. In feugiat neque ut aliquam pharetra. Nam in orci ac lorem vehicula fringilla auctor ut sem. Ut ultricies, purus non posuere sagittis, nisl leo sollicitudin magna, dictum efficitur leo eros a nulla.

Curabitur eu nunc posuere, finibus ligula ac, molestie lorem. Pellentesque et feugiat felis, vitae pellentesque nisi. Nam gravida ante a diam dignissim vulputate. Cras porttitor magna et eros accumsan, ac scelerisque mi viverra. Sed quis tincidunt est, a feugiat massa. Nam finibus neque quis est rutrum, quis porttitor diam vestibulum. Praesent hendrerit elit erat, non aliquam velit tincidunt eget. Praesent nec elementum sapien, sed feugiat metus.

<route lang="json5">
{
    name: "Sample File MD",
    meta: {
        date: "2021-12-02"
    }
}
</route>
