# Contact Icon

Vue component, color contact icon with a letter or image.

## Item

Some `data` for choosing the Letter and Color.  
* Letter - first letter of `name`
* Color - pseudo random(fixed) color

### Size

A circle 40px. If `small-icon` prop - 28px;

```html
<ContactIcon :item="{name: Sasha}"/>
<ContactIcon :item="{name: Sasha, age: 23, city: Moscow}"/>
<ContactIcon :src="URL_TO_SOURCE_IMAGE"/>
<ContactIcon :size="small-icon"/> # fixed color, no letter
```
