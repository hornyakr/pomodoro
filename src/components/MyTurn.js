import React, { useEffect, useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { finishTurn } from "../store/slices/turnsSlice";

import "./myTurn.css";

export default function MyTurn(props) {
  const dispatch = useDispatch();
  const { focusTime, shift, finishAt, id } = props.turn;

  const timeBar = useRef();
  const pomodoro = useRef();

  const [started, setstarted] = useState(false);
  const [pomodoroPosition, setpomodoroPosition] = useState(
    finishAt ? "95%" : 0
  );

  const [focusMin, setfocusMin] = useState(finishAt ? focusTime : 0);
  const [focusSec, setfocusSec] = useState(0);
  const [shiftMin, setshiftMin] = useState(finishAt ? shift : 0);
  const [shiftSec, setshiftSec] = useState(0);

  const pausHandler = () => setstarted(false);
  const startHandler = () => {
    setstarted(true);
  };

  useEffect(() => {
    const incTime = () => {
      if (focusMin < focusTime) {
        if (focusSec < 59) {
          setfocusSec(focusSec + 1);
        } else {
          setfocusSec(0);
          setfocusMin(focusMin + 1);
        }
      } else if (shiftMin < shift) {
        if (shiftSec < 59) {
          setshiftSec(shiftSec + 1);
        } else {
          setshiftMin(shiftMin + 1);
          setshiftSec(0);
        }
      } else {
        pausHandler();
        dispatch(finishTurn(id));
      }
    };
    let interval;
    if (started) {
      if (!finishAt) {
        interval = setInterval(incTime, 1000);
        setpomodoroPosition(
          ((focusMin * 60 + focusSec + (shiftMin * 60 + shiftSec)) /
            (focusTime * 60 + shift * 60)) *
            (timeBar.current.clientWidth - 25)
        );
      }
    } else {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [
    started,
    finishAt,
    shiftSec,
    shiftMin,
    focusSec,
    focusMin,
    dispatch,
    focusTime,
    id,
    shift,
  ]);
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <div>
          <div>
            <div>
              <b className="me-2">Fókusz:</b>
              <span>{focusMin > 9 ? focusMin : `0${focusMin}`}</span>:
              <span>{focusSec > 9 ? focusSec : `0${focusSec}`}</span>
              <span> / {focusTime} min</span>
            </div>
            <div>
              <b className="me-2">Szünet:</b>
              <span>{shiftMin > 9 ? shiftMin : `0${shiftMin}`}</span>:
              <span>{shiftSec > 9 ? shiftSec : `0${shiftSec}`}</span>
              <span> / {shift} sec</span>
            </div>
          </div>
        </div>
        <div>
          <Button variant="success" className="me-3" onClick={startHandler}>
            Kezdés
          </Button>
          <Button variant="outline-danger" onClick={pausHandler}>
            Szünet
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="position-relative">
        <img
          ref={pomodoro}
          className="pomodoro"
          src="/img/tomato.png"
          alt="Logó"
          width="50"
          style={{ left: pomodoroPosition }}
        />
        <div ref={timeBar} className="timeBar"></div>
      </Card.Body>
    </Card>
  );
}
