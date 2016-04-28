import Vue from "vue";
import VueFormGenerator from "../src";
import Schema from "./schema";

$(function() {
	console.log($.fn.selectpicker);
	
	var vm = new Vue({
		el: "#app",
		components: {
			"vue-form-generator": VueFormGenerator.component
		},

		filters: {
			prettyJSON: function(json) {
				if (json) {
					json = JSON.stringify(json, undefined, 4);
					json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
					return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
						var cls = 'number';
						if (/^"/.test(match)) {
							if (/:$/.test(match)) {
								cls = 'key';
							} else {
								cls = 'string';
							}
						} else if (/true|false/.test(match)) {
							cls = 'boolean';
						} else if (/null/.test(match)) {
							cls = 'null';
						}
						return '<span class="' + cls + '">' + match + '</span>';
					});
				}
			}
		},

		data: {
			model: {
				id: 1,
				name: "John Doe",
				type: "personal",
				password: "J0hnD03!x4",
				skills: [
					"Javascript",
					"VueJS"
				],
				email: "john.doe@gmail.com",
				language: "en-GB",
				age: 35,
				dob: 348966000000,
				rank: 6,
				address: {
					country: "United Kingdom",
					city: "London",
					street: "SW1A 5 Parliament St",
					geo: {
						lat: 51.501015, 
						lng: -0.126005
					}
				},
				role: "admin",
				created: 1461834815864,
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus porttitor, pellentesque odio sit amet, hendrerit felis. In turpis mauris, viverra a lacinia nec, fringilla ut nisi. Curabitur rutrum mattis risus, at dapibus nisl tempus et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget elementum lorem. Pellentesque tempor nec ante ut molestie. Suspendisse imperdiet tempus hendrerit. Morbi a dignissim augue.",
				status: true,

			},

			schema: Schema,

			formOptions: {
				validateAfterLoad: true,
				validateAfterChanged: true
			}
		}
	});

});