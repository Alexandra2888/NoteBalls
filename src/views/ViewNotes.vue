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
    <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
    />

  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue'
import Note from '../components/Notes/Note.vue'
import AddEditNote from '../components/Notes/AddEditNote.vue'
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
