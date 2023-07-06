import {newSpecPage} from '@stencil/core/testing';
import {Legacy} from '../index';

describe('clab-legacy', () => {
  it('renders "Developer" logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy>
        <mock:shadow-root>
          <div
            class="legacy legacy--developer"
            style="width: 100%;"
            data-e2e-size="100%"
          >
            <svg
              class="vector"
              fill="#464646"
              viewBox="0 0 377 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-developer">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="developer-typo">
                  <path d="M166.244 50h13.11c10.304 0 17.25-6.624 17.25-16.1 0-9.476-6.946-16.1-17.25-16.1h-13.11V50zm3.404-2.944V20.744h9.522c8.556 0 14.076 5.428 14.076 13.156 0 7.728-5.52 13.156-14.076 13.156h-9.522zM222.372 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM243.382 25.804l-9.154 20.608-9.062-20.608h-3.404L232.48 50h3.358l10.764-24.196h-3.22zM269.342 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM273.69 50h3.266V15.868h-3.266V50zM293.633 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM322.749 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM360.273 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM367.749 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Explore" logo with standard color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy type="explore"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy type="explore">
        <mock:shadow-root>
          <div
            class="legacy legacy--explore"
            style="width: 100%;"
            data-e2e-size="100%"
          >
            <svg
              class="vector"
              fill="#464646"
              viewBox="0 0 318 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-explore">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="explore-typo">
                  <path d="M169.648 47.056v-11.96H186.3v-2.898h-16.652V20.744h18.676V17.8h-22.08V50h22.77v-2.944h-19.366zM212.488 50l-9.66-12.42 9.108-11.776h-3.588l-7.268 9.476-7.268-9.476h-3.68l9.108 11.776L189.672 50h3.68l7.728-10.12L208.762 50h3.726zM228.09 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM244.5 50h3.266V15.868H244.5V50zM264.443 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM284.221 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM317.786 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05H297.5c.414-4.738 3.864-8.05 8.556-8.05zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" logo with positive color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="positive"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="positive">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer"
            style="width: 100%;"
            data-e2e-size="100%"
          >
            <svg
              class="vector"
              fill="#464646"
              viewBox="0 0 377 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-developer">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="developer-typo">
                  <path d="M166.244 50h13.11c10.304 0 17.25-6.624 17.25-16.1 0-9.476-6.946-16.1-17.25-16.1h-13.11V50zm3.404-2.944V20.744h9.522c8.556 0 14.076 5.428 14.076 13.156 0 7.728-5.52 13.156-14.076 13.156h-9.522zM222.372 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM243.382 25.804l-9.154 20.608-9.062-20.608h-3.404L232.48 50h3.358l10.764-24.196h-3.22zM269.342 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM273.69 50h3.266V15.868h-3.266V50zM293.633 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM322.749 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM360.273 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM367.749 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" with negative color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="negative"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="negative">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer"
            style="width: 100%;"
            data-e2e-size="100%"
          >
            <svg
              class="vector"
              fill="#fff"
              viewBox="0 0 377 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-developer">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="developer-typo">
                  <path d="M166.244 50h13.11c10.304 0 17.25-6.624 17.25-16.1 0-9.476-6.946-16.1-17.25-16.1h-13.11V50zm3.404-2.944V20.744h9.522c8.556 0 14.076 5.428 14.076 13.156 0 7.728-5.52 13.156-14.076 13.156h-9.522zM222.372 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM243.382 25.804l-9.154 20.608-9.062-20.608h-3.404L232.48 50h3.358l10.764-24.196h-3.22zM269.342 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM273.69 50h3.266V15.868h-3.266V50zM293.633 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM322.749 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM360.273 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM367.749 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" with custom color palette', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy fill-style="mono" fill-color="tomato"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy fill-style="mono" fill-color="tomato">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer"
            style="width: 100%;"
            data-e2e-size="100%"
          >
            <svg
              class="vector"
              fill="#000"
              viewBox="0 0 377 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-developer">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="developer-typo">
                  <path d="M166.244 50h13.11c10.304 0 17.25-6.624 17.25-16.1 0-9.476-6.946-16.1-17.25-16.1h-13.11V50zm3.404-2.944V20.744h9.522c8.556 0 14.076 5.428 14.076 13.156 0 7.728-5.52 13.156-14.076 13.156h-9.522zM222.372 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM243.382 25.804l-9.154 20.608-9.062-20.608h-3.404L232.48 50h3.358l10.764-24.196h-3.22zM269.342 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM273.69 50h3.266V15.868h-3.266V50zM293.633 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM322.749 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM360.273 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM367.749 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });

  it('renders "Developer" with a custom size', async () => {
    const {root} = await newSpecPage({
      components: [Legacy],
      html: '<clab-legacy size="320px"></clab-legacy>'
    });

    expect(root).toEqualHtml(`
      <clab-legacy size="320px">
        <mock:shadow-root>
          <div
            class="legacy legacy--developer"
            style="width: 320px;"
            data-e2e-size="320px"
          >
            <svg
              class="vector"
              fill="#464646"
              viewBox="0 0 377 68"
              preserveAspectRatio="xMidYMin slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="logo-developer">
                <g data-name="clab-sign" fill="#1890ff">
                  <path
                    clip-rule="evenodd" fill-rule="evenodd"
                    d="M49 68c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16-16 7.1634-16 16 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13-13 5.8203-13 13 5.8203 13 13 13zM16 50c8.8366 0 16-7.1634 16-16s-7.1634-16-16-16C7.16344 18 0 25.1634 0 34s7.16344 16 16 16zm0-3c7.1797 0 13-5.8203 13-13s-5.8203-13-13-13S3 26.8203 3 34s5.8203 13 13 13zM48 32c8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16S32 7.16344 32 16c0 8.8366 7.1634 16 16 16zm0-3c7.1797 0 13-5.8203 13-13S55.1797 3 48 3 35 8.8203 35 16s5.8203 13 13 13z"
                  />
                </g>
                <g data-name="developer-typo">
                  <path d="M166.244 50h13.11c10.304 0 17.25-6.624 17.25-16.1 0-9.476-6.946-16.1-17.25-16.1h-13.11V50zm3.404-2.944V20.744h9.522c8.556 0 14.076 5.428 14.076 13.156 0 7.728-5.52 13.156-14.076 13.156h-9.522zM222.372 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM243.382 25.804l-9.154 20.608-9.062-20.608h-3.404L232.48 50h3.358l10.764-24.196h-3.22zM269.342 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM273.69 50h3.266V15.868h-3.266V50zM293.633 50.23c7.084 0 12.282-5.152 12.282-12.328 0-7.176-5.198-12.282-12.282-12.282s-12.328 5.106-12.328 12.282 5.244 12.328 12.328 12.328zm0-2.898c-5.152 0-9.016-3.772-9.016-9.43 0-5.658 3.864-9.43 9.016-9.43s8.97 3.772 8.97 9.43c0 5.658-3.818 9.43-8.97 9.43zM322.749 25.62c-4.002 0-7.36 1.748-9.338 4.968v-4.784h-3.128v33.12h3.266V45.446c2.024 3.128 5.336 4.784 9.2 4.784 6.9 0 12.052-4.968 12.052-12.328 0-7.314-5.152-12.282-12.052-12.282zm-.23 21.712c-5.152 0-9.016-3.772-9.016-9.43 0-5.612 3.864-9.43 9.016-9.43 5.106 0 9.016 3.818 9.016 9.43 0 5.658-3.91 9.43-9.016 9.43zM360.273 37.902c0-7.268-4.922-12.282-11.73-12.282-6.808 0-11.822 5.106-11.822 12.282s5.152 12.328 12.696 12.328c3.818 0 7.176-1.38 9.338-3.956l-1.84-2.116c-1.84 2.116-4.462 3.174-7.406 3.174-5.29 0-9.154-3.358-9.522-8.418h20.24c0-.368.046-.736.046-1.012zm-11.73-9.476c4.738 0 8.188 3.312 8.602 8.05h-17.158c.414-4.738 3.864-8.05 8.556-8.05zM367.749 30.542v-4.738h-3.128V50h3.266V37.672c0-5.704 3.082-8.924 8.142-8.924.23 0 .506.046.782.046V25.62c-4.462 0-7.544 1.702-9.062 4.922zM112.88 17.8L99.034 41.674 85.05 17.8h-2.806V50h3.266V24.378l12.65 21.528h1.61l12.65-21.666V50h3.266V17.8h-2.806zM137.862 50.276c4.738 0 8.97-1.61 11.822-4.738l-2.162-2.162C144.9 46.09 141.68 47.24 138 47.24c-7.774 0-13.616-5.704-13.616-13.34S130.226 20.56 138 20.56c3.68 0 6.9 1.15 9.522 3.818l2.162-2.162c-2.852-3.128-7.084-4.692-11.776-4.692-9.706 0-16.882 6.946-16.882 16.376 0 9.43 7.176 16.376 16.836 16.376z" />
                </g>
              </g>
            </svg>
          </div>
        </mock:shadow-root>
      </clab-legacy>
    `);
  });
});
