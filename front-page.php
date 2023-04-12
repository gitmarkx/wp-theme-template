<?php get_header();?>
    <div class="page__content c-container">
        <h1><b>Parts List</b></h1>
        <br>
        <br>
        <section>
            <h5>Hamburger Button</h5>
            <div class="c-navMenu">
                <span class="c-navMenu--line-t"></span>
                <span class="c-navMenu--line-m"></span>
                <span class="c-navMenu--line-b"></span>
            </div>
            <br>
        </section>
        <br>
        <section>
            <h5>Tab</h5>
            <ul class="c-tabNav">
                <li>
                    <a href="#menu1" data-target="tab">Menu 1</a>
                </li>
                <li>
                    <a href="#menu2" data-target="tab">Menu 2</a>
                </li>
                <li>
                    <a href="#menu3" data-target="tab">Menu 3</a>
                </li>
            </ul>
            <br>
            <div class="c-tabContent">
                <div class="c-tabContent--item isActive" id="menu1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div class="c-tabContent--item" id="menu2">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                </div>
                <div class="c-tabContent--item" id="menu3">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
            </div>
        </section>
    </div>
<?php get_footer();?>