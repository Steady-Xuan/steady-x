import React, {
  FC,
  useState,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import Transition from "../Transition/transition";

import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
import Icon from "../Icon";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } =
    props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highligheIndex, setHighligheIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(inputValue, 300);

  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSuggestions([]);
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(results);
        setShowDropdown(true);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighligheIndex(-1);
  }, [debouncedValue, fetchSuggestions]);

  const highlight = (idx: number) => {
    if (idx < 0) idx = 0;
    if (idx >= suggestions.length) {
      idx = suggestions.length - 1;
    }
    setHighligheIndex(idx);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highligheIndex]) {
          handleSelect(suggestions[highligheIndex]);
        }
        break;
      case 38:
        highlight(highligheIndex - 1);
        break;
      case 40:
        highlight(highligheIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    setInputValue(value);
    triggerSearch.current = true;
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }

    triggerSearch.current = false;
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([]);
        }}
      >
        <ul className="viking-suggestion-list">
          {loading && (
            <div className="suggesions-loading-icon">
              <Icon icon="spinner" spin></Icon>
            </div>
          )}

          {suggestions.map((item, idx) => {
            const cnames = classNames("suggestion-item", {
              "is-active": idx === highligheIndex,
            });

            return (
              <li
                key={idx}
                className={cnames}
                onClick={() => {
                  handleSelect(item);
                }}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };

  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      ></Input>
      {generateDropdown()}
    </div>
  );
};

export default AutoComplete;
