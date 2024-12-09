
var app = new Vue({
    el: '#app',
    data: {
        contacts: [],
        newContact: {
            name: "",
            email: "",
            phone: "",
        },
        errors: {
            name: "",
            email: "",
            phone: "",
        },
    },

    computed: {
        jsonLD() {
            return {
                "@context": "http://schema.org",
                "@type": "ContactPage",
                "mainEntity": this.contacts.map(contact => ({
                    "@type": "Person",
                    "name": contact.name,
                    "email": contact.email,
                    "telephone": contact.phone
                }))
            };
        }
    },

    methods: {

        removeContact: function (contact) {
            this.contacts.splice(this.contacts.indexOf(contact), 1);
        },

        addContact: function (event) {

            this.errors.name = this.newContact.name.length < 1 ? "Name is required" : "";
            this.errors.email = this.newContact.email.length < 1 ? "Email is required" : "";
            this.errors.phone = this.newContact.phone.length < 1 ? "Phone is required" : "";
            if (this.errors.name || this.errors.email || this.errors.phone) { return; }

            this.contacts.push({ name: this.newContact.name, email: this.newContact.email, phone: this.newContact.phone });
            this.newContact = { name: "", email: "", phone: "" };
        }
    }
});

