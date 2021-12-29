
<template>
    <div id="errorDiv">
        <div class="unresolved">
            <span>Unresolved:</span>
            <div v-for="(error, i) in unresolved" :key="'A' + i">`{{ error.code }}` - {{ error.text }}
                <button v-bind:href="error.index" v-on:click.prevent="resolvedfn(i)">Resolve</button>    
            </div>
        </div>
        <div class="resolved">
            <span>Resolved:</span>

            <div v-for="(error, i) in resolved" :key="i">`{{ error.code }}` - {{ error.text }}
                <button v-bind:href="error.index" v-on:click.prevent="unResolved(i)">Un resolve</button>
            </div>

        </div>
        <div class="backlog">
            <span>Backlog:</span>
            <div v-for="(error, i) in backlog" :key="'B' + i">`{{ error.code }}` - {{ error.text }}
                <button v-bind:href="error.index" v-on:click.prevent="backLogInUnresolve(i)">Add to unResolve</button>
            </div>
        </div>
        <button class="undoResolve" @click.prevent="reset" >Reset</button>
        <button class="undoResolve" @click.prevent="undo" >Undo Last Operation</button>
    </div>
</template>

<script>
export default {
    // async asyncData({ $axios }) {
    //     try {
    //         const { resolved, unresolved, backlog } = await $axios.$get('http://localhost:8000/get_lists');
    //         return {
    //             resolved,
    //             unresolved,
    //             backlog,
    //         };
    //     } catch (error) {
    //         /* eslint-disable no-console */
    //         console.log(`Couldn't get error lists:\n${error}\nDid you start the API?`);
    //         console.log(
    //             'HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to.'
    //         );
    //     }
    // },
    data() {
   
        return {
      lastOperation: {
          type: 'none'
      },
      
            resolved: [
                {
                    index: 1,
                    code: 404,
                    text: 'resolve Error Occured',
                },
                  {
                    index: 44,
                    code: 'cumbursome error',
                    text: 'resolved error ',
                },
            ],
            unresolved: [
                {
                    index: 2,
                    code: 204,
                    text: 'unresolved Error',
                },
            ],
            backlog: [
                {
                    index: 3,
                    code: 303,
                    text: 'backLog Error',
                },
            ],
 
        };
    },

    methods: {
        unResolved(index) {
            this.unresolved.push(this.resolved[index])
            this.lastOperation.type='unresolve';
            this.lastOperation.data = this.resolved[index];
            this.resolved.splice(index, 1)
        },

          resolvedfn(index) {
            // let keyword = this.unresolved.filter(resIndex => resIndex.index === index);
            this.resolved.push(this.unresolved[index])
            this.lastOperation.type='resolve';
            this.lastOperation.data = this.unresolved[index];
            this.unresolved.splice(index, 1)
            },

        backLogInUnresolve(index) {
           this.unresolved.push(this.backlog[index])
           this.lastOperation.type='backlog-unresolve';
           this.lastOperation.data = this.backlog[index];

           this.backlog.splice(index, 1)
        },

        undo(){
            switch(this.lastOperation.type){
                case 'none':
                    alert('No Undo Operation Is Available!');
                    break;
                case 'resolve':
                    this.unresolved.push(this.lastOperation.data);
                    this.resolved = this.resolved.filter(e => e.index != this.lastOperation.data.index);
                    this.lastOperation.type = 'none';
                    this.lastOperation.data = null;
                    break;
                case 'unresolve':
                    this.resolved.push(this.lastOperation.data);
                    this.unresolved = this.unresolved.filter(e => e.index != this.lastOperation.data.index);
                    this.lastOperation.type = 'none';
                    this.lastOperation.data = null;
                    break;
                case 'backlog-unresolve':
                    this.backlog.push(this.lastOperation.data);
                    this.unresolved = this.unresolved.filter(e => e.index != this.lastOperation.data.index);
                    this.lastOperation.type = 'none';
                    this.lastOperation.data = null;
                    break;
            }
        },
       
     
         reset() {
            Object.assign(this.$data, this.$options.data());
        },
        
    },
};
</script>
<style scoped src="../assets/css/style.css">
/* @import '../assets/css/startpage.css'; */
</style>