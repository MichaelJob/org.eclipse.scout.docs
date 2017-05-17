/*******************************************************************************
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
jswidgets.NumberFieldForm = function() {
  jswidgets.NumberFieldForm.parent.call(this);
};
scout.inherits(jswidgets.NumberFieldForm, scout.Form);

jswidgets.NumberFieldForm.prototype._init = function(model) {
  jswidgets.NumberFieldForm.parent.prototype._init.call(this, model);

  var bodyGrid = new scout.HorizontalGroupBoxBodyGrid();
  bodyGrid.validate(this.rootGroupBox);
  bodyGrid = new scout.HorizontalGroupBoxBodyGrid();
  bodyGrid.validate(this.widget('DetailBox'));
  bodyGrid = new scout.HorizontalGroupBoxBodyGrid();
  bodyGrid.validate(this.widget('PropertiesBox'));

  var numberField = this.widget('NumberField');
  var formatField = this.widget('FormatField');
  formatField.setValue(numberField.decimalFormat.pattern);
  formatField.on('propertyChange', this._onFormatPropertyChange.bind(this));
  var enabledField = this.widget('EnabledField');
  enabledField.setValue(numberField.enabled);
  enabledField.on('propertyChange', this._onEnabledPropertyChange.bind(this));
};

jswidgets.NumberFieldForm.prototype._jsonModel = function() {
  return scout.models.getModel('jswidgets.NumberFieldForm');
};

jswidgets.NumberFieldForm.prototype._onFormatPropertyChange = function(event) {
  if (event.name === 'value') {
    this.widget('NumberField').setDecimalFormat(event.newValue);
  }
};

jswidgets.NumberFieldForm.prototype._onEnabledPropertyChange = function(event) {
  if (event.name === 'value') {
    this.widget('NumberField').setEnabled(event.newValue);
  }
};