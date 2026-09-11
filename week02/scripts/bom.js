/*
// WDD 131 - Week 02
// Book of Mormon - DOM Activity
// Rosario Guinhane


// ========================================
// SELECT ELEMENTS FROM THE HTML
// ========================================

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');


// ========================================
// CREATE LIST ITEM
// ========================================

const li = document.createElement('li');


// ========================================
// CREATE DELETE BUTTON
// ========================================

const deleteButton = document.createElement('button');


// ========================================
// ADD THE CHAPTER TO THE LIST ITEM
// ========================================

li.textContent = input.value;


// ========================================
// ADD DELETE SYMBOL
// ========================================

deleteButton.textContent = '❌';


// ========================================
// ACCESSIBILITY
// ========================================

deleteButton.setAttribute('aria-label', 'Remove chapter');


// ========================================
// ADD DELETE BUTTON TO LIST ITEM
// ========================================

li.append(deleteButton);


// ========================================
// ADD LIST ITEM TO THE UNORDERED LIST
// ========================================

list.append(li);
*/

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');

function addChapter() {
    const chapter = input.value.trim();

    if (!chapter) {
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
    deleteButton.addEventListener('click', () => li.remove());
    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();
}

button.addEventListener('click', addChapter);
