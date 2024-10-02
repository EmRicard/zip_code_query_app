<script>

</script>

<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="inputName">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="inputPassword">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirmação de Senha</label>
                <input type="password" class="form-control" id="inputPasswordConfirmation">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}
</style>