<script lang="ts">
import { defineComponent } from 'vue';

import AppBar from '@/components/organisms/AppBar.vue';
import Avatar from '@/components/atoms/Avatar.vue';
// import FilmTable from '@/components/organisms/FilmTable.vue';
import PrimaryBtn from '@/components/molecules/PrimaryBtn.vue';

type Status = 'idle' | 'pending' | 'rejected' | 'resolved';

const status: Status = 'idle';

export default defineComponent({
  name: '_home',

  components: {
    AppBar,
    Avatar,
    // FilmTable,
    PrimaryBtn,
  },

  data: () => ({
    active: null,
    myLists: [],
    otherLists: [],
    status,
  }),

})
</script>

<template>
  <div class="container">
    <header>
      <AppBar />
    </header>

    <aside class="sidebar">
      <Avatar
        url="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        alt="Avatar do Eduarda Vieira"
      />

      <h1>Eduarda Vieira</h1>
      <h2>@duds</h2>

      <hr />

      <nav>
        <h2>
          Minhas Listas
          <span>
            <PrimaryBtn>
              <fa-icon :icon="{prefix: 'fas', iconName: 'plus'}" />
            </PrimaryBtn>
          </span>
        </h2>

        <ul>
          <li v-if="status !== 'pending' && !myLists.length" class="no-data-text">
            Nenhuma lista encontrada. Clique no botão para criar uma.
          </li>

          <li
            v-for="list in myLists"
            :key="list.id"
            @click="active = list.id"
            :active="active === list.id"
          >
            <h3 v-text="list.title" />
          </li>
        </ul>

        <h2>
          Listas que participo
        </h2>

        <ul>
          <li v-if="status !== 'pending' && !otherLists.length" class="no-data-text">
            Você não participa de nenhuma lista.
          </li>

          <li
            v-for="list in otherLists"
            :key="list.id"
            @click="active = list.id"
            :active="active === list.id"
          >
            <h3 v-text="list.title" />
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <section v-if="!active" class="no-list">
        <h2>
          Selecione ou crie uma lista no menu lateral
        </h2>
      </section>
    </main>

    <aside v-if="active" class="members">
      <h2>Membros da Lista</h2>
      <ul>
        <li>
          <div class="user-card">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              alt="Avatar de mpedroni"
              class="avatar"
            />
            <h3>
              @mpedroni
            </h3>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template:
    "header header header" 100px
    "sidebar main members" / 2fr 6fr 1fr
  ;
  gap: 16px;
  margin: 0 80px;
}

.container header {
  grid-area: header;
  display: flex;
  align-items: center;
}

.container aside {
  background: rgba(0, 0, 0, 0.02);
  border: solid 1px rgba(0, 0, 0, 0.05);
  padding: 8px 12px;
}

.sidebar h1 {
  align-self: center;
  margin-top: 10px;
  color: var(--primary);
}

.sidebar h2 {
  align-self: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
}

.sidebar hr {
  align-self: center;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin: 16px 0;
  width: 75%;
}

.sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
}

.sidebar nav h2 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar nav ul {
  list-style: none;
  margin-bottom: 12px;
  padding-left: 12px;
}

.sidebar nav ul li {
  margin-bottom: 5px;
  cursor: pointer;
}

.sidebar nav ul .no-data-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}

.sidebar nav ul li[active="true"] h3 {
  color: var(--primary);
}

.sidebar nav ul li h3 {
  transition: color 0.2s;
}

.sidebar nav ul li:hover h3 {
  color: var(--primary);
}

.sidebar nav ul li h3 {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

main {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

main .no-list h2 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
}

.members {
  grid-area: members;
}

.members h2 {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 7px;
}

.members ul {
  list-style: none;
}

.members ul li:not(:last-child) {
  margin-bottom: 5px;
}

.members ul li .user-card {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.members ul li .user-card img {
  width: 32px;
  margin-right: 2px;
}

.members ul li .user-card h3 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  transition: color 0.2s;
}

.members ul li .user-card:hover h3 {
  color: var(--primary);
}
</style>
