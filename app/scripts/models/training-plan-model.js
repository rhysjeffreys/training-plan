/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TrainingPlanModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return TrainingPlanModel;
});