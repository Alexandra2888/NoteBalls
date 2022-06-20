<template>
  <div class="notes">

    <AddEditNote
        v-model="newNote"
        placeholder="Add a new note"
        ref="addEditNoteRef"
    >
      <template #buttons>
        <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <!-- <div class="card has-background-success-dark p-4 mb-5">
          <div class="field">
            <div class="control">
              <textarea
                  v-model="newNote"
                  class="textarea"
                  placeholder="Add a new note"
                  ref="newNoteRef"
              />
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button
                  @click="addNote"
                  :disabled="!newNote"
                  class="button is-link has-background-success"
              >
                Add New Note
              </button>
            </div>
          </div>
        </div> -->

    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success max=100" />

    <template v-else>
      <Note
          v-for="note in storeNotes.notes"
          :key="note.id"
          :note="note"
      />

      <div v-if="!storeNotes.notes.length"
           class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
        No notes here yet...</div>
    </template>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue'
import Note from '../components/notes/Note.vue'
import AddEditNote from '../components/notes/AddEditNote.vue'
import { useStoreNotes } from '../stores/storeNotes'
import { useWatchCharacters } from "../use/useWatchCharacters";

// store

const storeNotes = useStoreNotes()

/*
  delete note
*/
//const deleteNote = idToDelete => {
//notes.value = notes.value.filter(note => { return note.id !== idToDelete })
//}

//  notes

const newNote = ref('')
const addEditNoteRef = ref(null)
const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

//watch characters
useWatchCharacters(newNote)




</script>
