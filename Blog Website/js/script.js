document.addEventListener('DOMContentLoaded', function () {
    const addContentBoxButton = document.getElementById('add_content_box');
    const contentBoxesContainer = document.getElementById('content_boxes');

    addContentBoxButton.addEventListener('click', function () {
        const newContentBox = document.createElement('div');
        newContentBox.classList.add('content_box');

        const contentHeading = document.createElement('input');
        contentHeading.setAttribute('type', 'text');
        contentHeading.classList.add('content_heading');
        contentHeading.setAttribute('placeholder', 'Heading');

        const contentParagraph = document.createElement('textarea');
        contentParagraph.classList.add('content_paragraph');
        contentParagraph.setAttribute('rows', '4');
        contentParagraph.setAttribute('placeholder', 'Enter your paragraph');

        const boldHeadingCheckbox = document.createElement('input');
        boldHeadingCheckbox.setAttribute('type', 'checkbox');
        boldHeadingCheckbox.classList.add('bold_heading');

        const boldHeadingLabel = document.createElement('label');
        boldHeadingLabel.appendChild(boldHeadingCheckbox);
        boldHeadingLabel.appendChild(document.createTextNode(' Bold Heading'));

        const increaseTextButton = document.createElement('button');
        increaseTextButton.setAttribute('type', 'button');
        increaseTextButton.classList.add('increase_text');
        increaseTextButton.textContent = 'Increase Text Size';
        increaseTextButton.addEventListener('click', function () {
            contentParagraph.style.fontSize = 'larger';
        });

        const removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.classList.add('remove_box');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            contentBoxesContainer.removeChild(newContentBox);
        });

        newContentBox.appendChild(contentHeading);
        newContentBox.appendChild(contentParagraph);
        newContentBox.appendChild(boldHeadingLabel);
        // newContentBox.appendChild(increaseTextButton);
        newContentBox.appendChild(removeButton);

        contentBoxesContainer.appendChild(newContentBox);
    });
});
