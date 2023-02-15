<template>
    <section id="global-nav" class="avenir-light-regular shadow">
        <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-lg-10 col-md-12">
                    <nav class="py-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item text-uppercase">
                                <a class="text-dark text-decoration-none" href="/">Home</a>
                            </li>
                            <li class="breadcrumb-item text-uppercase active" aria-current="page">
                                {{ page_title }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['page_title'],
    data() {
        return {
        }
    },
}
</script>