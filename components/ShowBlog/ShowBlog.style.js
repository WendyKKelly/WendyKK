
import styled from 'styled-components';

const Section = styled.div`

.cardsmall {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
    box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12), 0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
    background-color: #fff;
    border: none;
    border-radius: 0.625rem;
}

.cardpost__image {
    position: relative;
    min-height: 13.3125rem;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.grid {
    margin-bottom: 4.5rem!important;
}

.grid:nth-child(3n+1) {
    clear: both;
}

.authorimg {
    transform: translateY(50%);
    margin-left: 1.5625rem;
    position: absolute;
    bottom: 0;
    display: flex!important;
}

.authorimg a {
    box-shadow: 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90, 97, 105, 0.5);
    display: block;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    text-indent: -9999px;
    width: 3.1875rem;
    height: 3.1875rem;
}

.textfiordblue {
    color: #3d5170 !important;
}

.grid h5 {
    margin-top: 15px;
}

.cardText {
    display: block;
    /* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 4.6em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-weight: 500;
    color: #5a6169;
    font-size: 15px;
}

.grid svg {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    width: 0.875em;
    margin-right: 10px;
}

.grid span {
    font-weight: 500;
    font-size: 15px;
    display: inline;
}
`;
export default Section;