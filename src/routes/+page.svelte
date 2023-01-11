<script>
    // @ts-nocheck
	import { getUsers, getUser } from '$lib/get';
	import { createUser } from "$lib/post";
	import { updateUser } from "$lib/put";
	import { deleteUser, deleteUsers } from '$lib/delete';
    let users = [], user;
    let newUser = {
        id: "",
        username: "",
        password: ""
    }
    let existUser = {
        id: "",
        username: "",
        password: ""
    }
    let nextRemoveUser = {
        id: ""
    }
    let nextGetUser ={
        id: ""
    }
</script>
<h3 style="background-color: red ;">API TESTER</h3>

<h1 style="background-color: purple;">All users</h1>
<div>
    <h4>Get all users</h4>
    <input on:click={async ()=>{
        users = await getUsers()
    }} type="submit" value="Voir tous les utilisateurs">
    {#each users as user}
         <div>
            <p>User {user.id}:</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>-------------------------</p>
         </div>
    {/each}
</div>
<div>
    <h4>Delete all users</h4>
    <input on:click={async ()=>{
        const status = await deleteUsers()
        status === 200 ? alert("Liste des utilisateurs supprimé") : alert("La base est déjà vide")
        users = []
    }} type="button" value="Supprimer tous les utiliateurs">
</div>


<h1 style="background-color: bisque;">Single user</h1>
<div>
    <h4>Create a new user</h4>
    <input bind:value={newUser.username} type="text" placeholder="username">
    <input bind:value={newUser.password}  type="password" placeholder="***">
    <input on:click={async ()=>{
        const status = await createUser(newUser.username, newUser.password)
        newUser.username = "";
        newUser.password = "";
        status == 200 ? alert("Utilisateur ajouter avec succès 🟩") : alert("Valeurs invalides ❌");
    }} type="submit" value="Creer un utilisateur">
</div>
<div>
    <h4>Get a single user</h4>
    <input bind:value={nextGetUser.id} type="text" placeholder="id de l'utilisateur a récupérer">
    <input on:click={async ()=>{
        const {status, u}  = await getUser(nextGetUser.id)
        user = u
        if(status === 404) alert("Utilisateur introuvable")
    }} type="submit" value="Voir l'utilisateur">
    {#if user}
    <div>
        <p>User {user.id}:</p>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
        <p>-------------------------</p>
     </div>
    {/if}
</div>

<!--  -->
<div>
    <h4>Update a valid user</h4>
    <input bind:value={existUser.id} type="text" placeholder="id de l'utilisateur a modifier">
    <input bind:value={existUser.username} type="text" placeholder="Nouveau username">
    <input bind:value={existUser.password}  type="password" placeholder="Nouveau mot de passe">
    <input on:click={ async ()=>{
        const status = await updateUser(existUser.id, existUser.username, existUser.password)
    }} type="submit" value="Modifier les données un utilisateur">
</div>
<!--  -->
<div>
    <h4>Delete a user</h4>
    <input bind:value={nextRemoveUser.id} type="text" placeholder="id de l'utilisateur a modifier">
    <input on:click={()=>{
        deleteUser(nextRemoveUser.id)
        users = users
    }} type="submit" value="Supprimer l'utilisateur">
</div>