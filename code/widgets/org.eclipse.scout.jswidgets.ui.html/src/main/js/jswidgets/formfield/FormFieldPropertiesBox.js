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
jswidgets.FormFieldPropertiesBox = function() {
  jswidgets.FormFieldPropertiesBox.parent.call(this);
  this.field = null;
};
scout.inherits(jswidgets.FormFieldPropertiesBox, scout.GroupBox);

jswidgets.FormFieldPropertiesBox.prototype._init = function(model) {
  jswidgets.FormFieldPropertiesBox.parent.prototype._init.call(this, model);

  var bodyGrid = new scout.VerticalSmartGroupBoxBodyGrid();
  bodyGrid.validate(this);

  this._setField(this.field);
};

jswidgets.FormFieldPropertiesBox.prototype._jsonModel = function() {
  return scout.models.getModel('jswidgets.FormFieldPropertiesBox');
};

jswidgets.FormFieldPropertiesBox.prototype.setField = function(field) {
  this.setProperty('field', field);
};

jswidgets.FormFieldPropertiesBox.prototype._setField = function(field) {
  this._setProperty('field', field);
  if (!this.field) {
    return;
  }
  var enabledField = this.widget('EnabledField');
  enabledField.setValue(this.field.enabled);
  enabledField.on('propertyChange', this._onPropertyChange.bind(this));

  var visibleField = this.widget('VisibleField');
  visibleField.setValue(this.field.visible);
  visibleField.on('propertyChange', this._onPropertyChange.bind(this));

  var labelVisibleField = this.widget('LabelVisibleField');
  labelVisibleField.setValue(this.field.labelVisible);
  labelVisibleField.on('propertyChange', this._onPropertyChange.bind(this));

  var statusVisibleField = this.widget('StatusVisibleField');
  statusVisibleField.setValue(this.field.statusVisible);
  statusVisibleField.on('propertyChange', this._onPropertyChange.bind(this));

  var mandatoryField = this.widget('MandatoryField');
  mandatoryField.setValue(this.field.mandatory);
  mandatoryField.on('propertyChange', this._onPropertyChange.bind(this));

  var disabledStyleField = this.widget('DisabledStyleField');
  disabledStyleField.setValue(this.field.disabledStyle);
  disabledStyleField.on('propertyChange', this._onPropertyChange.bind(this));

  var labelField = this.widget('LabelField');
  labelField.setValue(this.field.label);
  labelField.on('propertyChange', this._onPropertyChange.bind(this));

  var labelPositionField = this.widget('LabelPositionField');
  labelPositionField.setValue(this.field.labelPosition);
  labelPositionField.on('propertyChange', this._onPropertyChange.bind(this));

  var labelWidthInPixelField = this.widget('LabelWidthInPixelField');
  labelWidthInPixelField.setValue(this.field.labelWidthInPixel);
  labelWidthInPixelField.on('propertyChange', this._onPropertyChange.bind(this));

  var tooltipTextField = this.widget('TooltipTextField');
  tooltipTextField.setValue(this.field.tooltipText);
  tooltipTextField.on('propertyChange', this._onPropertyChange.bind(this));
};

jswidgets.FormFieldPropertiesBox.prototype._onPropertyChange = function(event) {
  if (event.name === 'value' && event.source.id === 'EnabledField') {
    this.field.setEnabled(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'VisibleField') {
    this.field.setVisible(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'LabelVisibleField') {
    this.field.setLabelVisible(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'StatusVisibleField') {
    this.field.setStatusVisible(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'MandatoryField') {
    this.field.setMandatory(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'DisabledStyleField') {
    this.field.setDisabledStyle(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'LabelField') {
    this.field.setLabel(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'LabelPositionField') {
    this.field.setLabelPosition(event.newValue);
  } else if (event.name === 'value' && event.source.id === 'LabelWidthInPixelField') {
    if (this.field.lookupRow) {
      this.field.setLabelWidthInPixel(this.field.lookupRow.key);
    } else {
      this.field.setLabelWidthInPixel(scout.numbers.ensure(event.newValue));
    }
  } else if (event.name === 'value' && event.source.id === 'TooltipTextField') {
    this.field.setTooltipText(event.newValue);
  }
};