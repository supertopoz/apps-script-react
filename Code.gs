function include(filename) {
Logger.log(filename)
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function onOpen() {
  SlidesApp.getUi().createMenu('Picker')
      .addItem('Start', 'showSidebar')
      .addToUi();
}

function showSidebar() {
        var ui = HtmlService.createTemplateFromFile('Index').evaluate().setTitle(
            'Flashcards');
        SlidesApp.getUi().showSidebar(ui);
}
